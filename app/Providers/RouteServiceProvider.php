<?php

namespace App\Providers;

use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * This namespace is applied to your controller routes.
     *
     * In addition, it is set as the URL generator's root namespace.
     *
     * @var string
     */
    protected $namespace = 'App\Http\Controllers';

    /**
    * Define your custom API route files prefix here
    *
    * @var string
    **/
    protected $apiPrefix = 'api/v1';

    /**
     * Define your route model bindings, pattern filters, etc.
     *
     * @return void
     */
    public function boot()
    {
        //

        parent::boot();
    }

    /**
     * Define the routes for the application.
     *
     * @return void
     */
    public function map()
    {
        $this->mapApiRoutes();

        $this->mapAdminRoutes();

        $this->mapConfigRoutes();

        $this->mapLogRoutes();

        $this->mapAlertRoutes();

        $this->mapWebRoutes();

        //
    }

    /**
     * Define the "web" routes for the application.
     *
     * These routes all receive session state, CSRF protection, etc.
     *
     * @return void
     */
    protected function mapWebRoutes()
    {
        Route::middleware('web')
             ->namespace($this->namespace)
             ->group(base_path('routes/web.php'));
    }

    /**
     * Define the "api" routes for the application.
     *
     * These routes are typically stateless.
     *
     * @return void
     */
    protected function mapApiRoutes()
    {
        Route::prefix('api')
             ->middleware('api')
             ->namespace($this->namespace)
             ->group(base_path('routes/api.php'));
    }

    /**
     * Define the "api/admin" routes for the application.
     *
     * @return void
     */
    protected function mapAdminRoutes()
    {
        Route::prefix('api')
            ->middleware(['api', 'auth:api'])
            ->namespace($this->namespace . '\API\Admin')
            ->group(base_path('routes/api/admin.php'));
    }

    /**
     * Define the "api/logs" routes for the application.
     *
     * @return void
     */
    protected function mapLogRoutes()
    {
        Route::prefix($this->apiPrefix)
            ->middleware('api')
            ->namespace($this->namespace)
            ->group(base_path('routes/api/log.php'));
    }

    /**
     * Define the "api/alerts" routes for the application.
     *
     * @return void
     */
    protected function mapAlertRoutes()
    {
        Route::prefix($this->apiPrefix)
            ->middleware('api')
            ->namespace($this->namespace)
            ->group(base_path('routes/api/alert.php'));
    }

    /**
     * Define the "api/config" routes for the application.
     *
     * @return void
     */
    protected function mapConfigRoutes()
    {
        Route::prefix($this->apiPrefix)
            ->middleware('api')
            ->namespace($this->namespace)
            ->group(base_path('routes/api/device_config.php'));
    }
}
