<?php

namespace Modules\Updater\Database\Seeders;

use Illuminate\Database\Seeder;
use Database\Seeders\FrontendCollectionSeeder;

class UpdaterDatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $this->call([
            PagesDataSeeder::class,
            SettingsDataSeeder::class,
            FrontendCollectionSeeder::class,
            LanguagePropertiesSyncSeeder::class,
        ]);

        // php artisan module:seed Updater --class=UpdaterDatabaseSeeder
    }
}
