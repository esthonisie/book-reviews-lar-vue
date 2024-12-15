<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Author extends Model
{
    /** @use HasFactory<\Database\Factories\AuthorFactory> */
    use HasFactory;

    public function getNameAttribute(): string
    {
        return $this->first_name.' '.$this->last_name;
    }

    public function books()
    {
        return $this->hasMany(Book::class);
    }
}