<?php

namespace App\Http\Controllers;

use App\Models\Feedback;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FeedbackController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // 
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

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

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Feedback $feedback)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Feedback $feedback)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Feedback $feedback)
    {
        //
    }
}
