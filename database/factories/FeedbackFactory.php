<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Feedback>
 */
class FeedbackFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => User::inRandomOrder()->first()->id,
            'title' => fake()->sentence(),
            'description' => fake()->paragraph(fake()->numberBetween(20, 80)),
            'category' => fake()->randomElement(['bug', 'feature', 'improvement']),
            'created_at' => fake()->dateTimeBetween('-1 year', 'now'),
        ];
    }
}
