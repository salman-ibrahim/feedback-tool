<?php

namespace App\Http\Controllers;

use App\Models\Feedback;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FeedController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // return with feedbacks containing poster name and comments count also paginate
        return Inertia::render('Feed', [
            'feedbacks' => Feedback::with('user:id,name')->withCount('comments')->orderByDesc('created_at')->paginate(5),
        ]);
    }
}
