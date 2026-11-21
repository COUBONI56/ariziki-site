<?php
declare(strict_types=1);
// ─────────────────────────────────────────────────────────────
//  Formulaire de contact ARIZIKI — fichier généré, ne pas modifier ici :
//  changez l'adresse dans src/config/site.ts puis relancez le build.
// ─────────────────────────────────────────────────────────────
$TO     = "contacts@ariziki.com";
$FROM   = "contacts@ariziki.com";
$COPY   = "";
$SITE   = "ARIZIKI";
$BACK   = ['fr' => "/contact/", 'en' => "/en/contact/", 'de' => "/de/kontakt/"];
$LIMIT  = 5;      // messages max par adresse IP et par heure

$isJs = ($_POST['js'] ?? '') === '1';
$lang = (string)($_POST['lang'] ?? 'fr');
if (!in_array($lang, ['fr', 'en', 'de'], true)) $lang = 'fr';

function finish(bool $ok, bool $isJs, string $back, int $code = 200): void {
  if ($isJs) {
    http_response_code($code);
    header('Content-Type: application/json; charset=utf-8');
    header('Cache-Control: no-store');
    echo json_encode(['ok' => $ok]);
  } else {
    header('Location: ' . $back . '?status=' . ($ok ? 'ok' : 'error'), true, 303);
  }
  exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') { header('Allow: POST'); finish(false, true, $BACK[$lang], 405); }

// Même origine uniquement
$host = $_SERVER['HTTP_HOST'] ?? '';
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '' && parse_url($origin, PHP_URL_HOST) !== $host) finish(false, $isJs, $BACK[$lang], 403);

// Pièges à robots : champ caché rempli ou envoi trop rapide (< 3 s)
if (trim((string)($_POST['website'] ?? '')) !== '') finish(true, $isJs, $BACK[$lang]);
$t = (int)($_POST['t'] ?? 0);
if ($t > 0 && (microtime(true) * 1000 - $t) < 3000) finish(true, $isJs, $BACK[$lang]);

// Limite d'envois par IP
$ip = $_SERVER['REMOTE_ADDR'] ?? '0';
$bucket = sys_get_temp_dir() . '/az_contact_' . hash('sha256', $ip . date('YmdH'));
$count = is_file($bucket) ? (int)file_get_contents($bucket) : 0;
if ($count >= $LIMIT) finish(false, $isJs, $BACK[$lang], 429);
@file_put_contents($bucket, (string)($count + 1));

// Validation
$clean = fn($v, int $max) => mb_substr(trim(str_replace(["\r", "\n", "\0"], ' ', strip_tags((string)$v))), 0, $max);
$name    = $clean($_POST['name'] ?? '', 120);
$email   = trim((string)($_POST['email'] ?? ''));
$subject = $clean($_POST['subject'] ?? 'general', 40);
$message = mb_substr(trim(strip_tags((string)($_POST['message'] ?? ''))), 0, 5000);
$consent = ($_POST['consent'] ?? '') === '1';

if ($name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || preg_match('/[\r\n]/', $email) || mb_strlen($message) < 10 || !$consent) {
  finish(false, $isJs, $BACK[$lang], 422);
}

$subjects = ['general' => 'Question générale', 'eliteoffers' => 'ARIZIKI EliteOffers', 'cibleflow' => 'Cibleflow', 'novarys' => 'NOVARYS — accès anticipé', 'next' => 'Prochains SaaS', 'partnership' => 'Partenariat', 'press' => 'Presse', 'other' => 'Autre'];
$label = $subjects[$subject] ?? 'Question générale';

$body  = "Nouveau message depuis le site $SITE\n";
$body .= str_repeat('-', 40) . "\n";
$body .= "Nom     : $name\nE-mail  : $email\nSujet   : $label\nLangue  : " . strtoupper($lang) . "\nDate    : " . date('d/m/Y H:i') . "\n";
$body .= str_repeat('-', 40) . "\n\n$message\n";

$headers = [
  'From'         => "$SITE <$FROM>",
  'Reply-To'     => "$name <$email>",
  'MIME-Version' => '1.0',
  'Content-Type' => 'text/plain; charset=UTF-8',
  'Content-Transfer-Encoding' => '8bit',
  'X-Mailer'     => 'ariziki.com',
];
if ($COPY !== '' && strcasecmp($COPY, $TO) !== 0) $headers['Bcc'] = $COPY;
$encodedSubject = '=?UTF-8?B?' . base64_encode("[$SITE] $label — $name") . '?=';
$sent = @mail($TO, $encodedSubject, $body, $headers, '-f' . $FROM);

finish($sent, $isJs, $BACK[$lang], $sent ? 200 : 500);
