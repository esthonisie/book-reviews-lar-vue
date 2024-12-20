<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Author;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Book>
 */
class BookFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => 
                "The " . 
                fake()->randomElement(["Extraordinary ", "Boring ", "Miserable ", "Unusual ", "Extraterrestrial "]) .
                fake()->randomElement(["Life ", "Children ", "History ", "Spouse ", "Cats "]) .
                "of " .  
                fake()->title() . 
                " " . 
                fake()->unique()->colorName(),
            'author_id' => Author::factory(),
            'cover_img' => "JulieDeGraag.png",
        ];
    }
}