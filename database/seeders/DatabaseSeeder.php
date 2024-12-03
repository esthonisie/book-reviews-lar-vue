<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Author;
use App\Models\Book;
use App\Models\Review;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $authors = Author::factory(15)->create();

        $books = Book::factory(40)
            ->recycle($authors)
            ->create();

        Review::factory(200)
            ->recycle($books)
            ->create();
    }
}