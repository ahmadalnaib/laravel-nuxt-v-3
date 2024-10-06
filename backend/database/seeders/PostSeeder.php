<?php

namespace Database\Seeders;

use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //

        Post::factory(10)->create();
        User::find(1)->update(['name' => 'John Doe',
            'email' => 'alnaib888@gmail.com']);
    }
}
