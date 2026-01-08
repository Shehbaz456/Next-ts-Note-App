"use client";

import { useEffect, useState } from "react";
import type { Note } from "@/types/note";

export default function Home() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editId, setEditId] = useState<string | null>(null);

  const fetchNotes = async () => {
    const res = await fetch("/api/notes");
    const data: Note[] = await res.json();
    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const url = editId ? `/api/notes/${editId}` : "/api/notes";
    const method = editId ? "PUT" : "POST";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });

    setTitle("");
    setContent("");
    setEditId(null);
    fetchNotes();
  };

  const handleEdit = (note: Note) => {
    setTitle(note.title);
    setContent(note.content);
    setEditId(note._id);
  };

  const handleDelete = async (id: string) => {
    await fetch(`/api/notes/${id}`, { method: "DELETE" });
    fetchNotes();
  };

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">📝 Notes App</h1>

      <form onSubmit={handleSubmit} className="space-y-3 mb-6">
        <input
          className="w-full border p-2 rounded"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          className="w-full border p-2 rounded"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />

        <button className="bg-black text-white px-4 py-2 rounded">
          {editId ? "Update Note" : "Add Note"}
        </button>
      </form>

      <div className="space-y-4">
        {notes.map((note) => (
          <div key={note._id} className="border p-4 rounded">
            <h2 className="font-semibold">{note.title}</h2>
            <p className="text-gray-700">{note.content}</p>
            <p className="text-xs text-gray-400">
              {new Date(note.createdAt).toLocaleString()}
            </p>

            <div className="flex gap-4 mt-2">
              <button
                onClick={() => handleEdit(note)}
                className="text-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(note._id)}
                className="text-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
