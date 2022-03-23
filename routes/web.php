<?php

use App\Http\Controllers\AdministratorController;
use App\Http\Controllers\PeriodHourController;
use App\Http\Controllers\TimeFrameController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', function() {
    return redirect()->route('login');
})->name('welcome');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard.index');
Route::get('/trend', function () {
    return Inertia::render('Trend');
})->middleware(['auth', 'verified'])->name('trend.index');
Route::get('/investment', function () {
    return Inertia::render('Investment');
})->middleware(['auth', 'verified'])->name('investment.index');
Route::get('/api-data', function () {
    return Inertia::render('ApiData');
})->middleware(['auth', 'verified'])->name('api-data.index');
Route::get('/blog', function () {
    return Inertia::render('Blog');
})->middleware(['auth', 'verified'])->name('blog.index');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::prefix('/administrator')->group(function () {
        Route::get('/index', [AdministratorController::class, 'index'])->name('administrator.index');
        Route::prefix('/time')->group(function () {
            Route::get('/index', [TimeFrameController::class, 'index'])->name('administrator.time_frame.index');
            Route::get('/get', [TimeFrameController::class, 'get'])->name('administrator.time_frame.get');
            Route::get('/create', [TimeFrameController::class, 'create'])->name('administrator.time_frame.create');
            Route::post('/store', [TimeFrameController::class, 'store'])->name('administrator.time_frame.store');
            Route::get('/show/{timeFrame}', [TimeFrameController::class, 'show'])->name('administrator.time_frame.show');
            Route::put('/update/{timeFrame}', [TimeFrameController::class, 'update'])->name('administrator.time_frame.put');
            Route::delete('/delete/{timeFrame}', [TimeFrameController::class, 'destroy'])->name('administrator.time_frame.destroy');
        });

        Route::prefix('/period')->group(function () {
            Route::get('/index', [PeriodHourController::class, 'index'])->name('administrator.period.hour.index');
            Route::get('/get', [PeriodHourController::class, 'get'])->name('administrator.period.hour.get');
            Route::get('/create', [PeriodHourController::class, 'create'])->name('administrator.period.hour.create');
            Route::post('/store', [PeriodHourController::class, 'store'])->name('administrator.period.hour.store');
        });
    });
});

require __DIR__.'/auth.php';
