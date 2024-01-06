<?php

namespace App\Http\Controllers;

use App\Models\Feedback;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FeedbackController extends Controller
{
    /**
     * Store a newly created resource in storage.
     * 
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => ['required', 'min:1', 'max:255'],
            'description' => ['required', 'min:1'],
            'category' => ['required', 'min:1', 'max:255'],
        ]);

        $feedback = Feedback::create([
            'user_id' => auth()->user()->id,
            'title' => $request->title,
            'description' => $request->description,
            'category' => $request->category,
        ]);

        return redirect()->route('feed');
    }

    /**
     * Display the specified resource.
     */
    public function show(Feedback $feedback)
    {
        // return with feedbacks containing poster name and comments and comments count
        return Inertia::render('Feedbacks/Feedback', [
            'feedback' => $feedback->load('user:id,name')->loadCount('comments')->load('comments.user:id,name'),
        ]);
    }
}
