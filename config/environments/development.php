<?php
/**
 * Configuration overrides for WP_ENV === 'development'
 */

use Roots\WPConfig\Config;

Config::define('SAVEQUERIES', true);
Config::define('WP_DEBUG', true);
Config::define('WP_DEBUG_DISPLAY', true);
Config::define('WP_DISABLE_FATAL_ERROR_HANDLER', true);
Config::define('SCRIPT_DEBUG', true);

ini_set('display_errors', '1');

// Enable plugin and theme updates and installation from the admin
Config::define('DISALLOW_FILE_MODS', false);

Config::define( 'AS3CF_SETTINGS', serialize( array(
    'provider' => 'aws',
    'access-key-id' => 'AKIAJZDEDTY6TQQMQUUA',
    'secret-access-key' => 'NQMgITX0hL3+9DTi9OOdd/GqhVE7F+5P9iRrtgoV',
    // Bucket to upload files to
    'bucket' => 'planet-test-bucket',
    // Bucket region (e.g. 'us-west-1' - leave blank for default region)
    'region' => 'us-east-2',
    // Automatically copy files to bucket on upload
    'copy-to-s3' => true,
    // Rewrite file URLs to bucket
    'serve-from-s3' => true,
    // Bucket URL format to use ('path', 'cloudfront')
    'domain' => 'path',
    // Custom domain if 'domain' set to 'cloudfront'
    //'cloudfront' => 'cdn.exmple.com',
    // Enable object prefix, useful if you use your bucket for other files
    'enable-object-prefix' => true,
    // Object prefix to use if 'enable-object-prefix' is 'true'
    'object-prefix' => 'wp-fund',
    // Organize bucket files into YYYY/MM directories
    'use-yearmonth-folders' => true,
    // Serve files over HTTPS
    'force-https' => false,
    // Remove the local file version once offloaded to bucket
    'remove-local-file' => false,
    // Append a timestamped folder to path of files offloaded to bucket
    'object-versioning' => true,
) ) );

/**
* Configuration - Plugin: Redis
* @url: https://wordpress.org/plugins/redis-cache/
*/
if (!empty(getenv('REDIS_URL'))) {
    $env = parse_url(getenv('REDIS_URL'));
    
    Config::define('WP_CACHE', true);
    Config::define('WP_REDIS_DISABLED', false);
    Config::define('WP_REDIS_CLIENT', 'predis');
    Config::define('WP_REDIS_SCHEME', $env['scheme']);
    Config::define('WP_REDIS_HOST', $env['host']);
    Config::define('WP_REDIS_PORT', $env['port']);
    Config::define('WP_REDIS_PASSWORD', $env['pass']);

    // 28 Days
    Config::define('WP_REDIS_MAXTTL', 2419200);

    unset($env);
}

/**
 * Configuration - Plugin: Batcache
 * @url: https://wordpress.org/plugins/batcache/
 */
$batcache = array(
    'debug' => false,
    'debug_header' => true,
    'cache_control' => true,
    'use_stale' => true,
    'cache_redirects' => true,
    'group' => 'batcache',
);
