<?php

/*
 *--------------------------------------------------------------------------
 * API Routes
 *--------------------------------------------------------------------------
 *
 * Here is where you can register API routes for your application. These
 * routes are loaded by the RouteServiceProvider within a group which
 * is assigned the "api" middleware group. Enjoy building your API!
 *
 */

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\FrontendCollectionController;

// Route::middleware(['auth:sanctum'])->prefix('v1')->group(function () {
//     Route::apiResource('installer', InstallerController::class)->names('installer');
// });

// Page Data Storage Routes
Route::post('store-page/{slug}', [FrontendCollectionController::class, 'storePage']);

Route::get('test', function () {
   return 'hello testing';
});
