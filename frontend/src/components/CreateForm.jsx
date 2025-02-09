import React, { useState, useEffect } from "react";
import axios from "axios";
import { GENRE } from "../utils/Constants";

const CreateForm = ({ onToggleForm, initialData, onSubmit,updateBlogs }) => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    genre: "",
    imageUrl: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (initialData) {
        // Update existing blog
        await axios.put(`http://localhost:3000/api/blogs/${initialData._id}`, formData);
        alert("Blog updated successfully!");
      } else {
        // Create new blog
        await axios.post("http://localhost:3000/api/blogs", formData);
        alert("Blog created successfully!");
      }
      onSubmit(formData);
      onToggleForm();
      updateBlogs();
    } catch (error) {
      console.error("Error submitting blog:", error);
      alert("Failed to submit blog.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">{initialData ? "Edit Blog" : "Create a Blog"}</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="title"
          placeholder="Enter blog title"
          value={formData.title}
          onChange={handleChange}
          required
          className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <select
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          required
          className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Select Genre</option>
          {GENRE.map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ))}
        </select>
        <input
          type="text"
          name="imageUrl"
          placeholder="Enter image URL"
          value={formData.imageUrl}
          onChange={handleChange}
          required
          className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          name="content"
          placeholder="Enter blog content"
          value={formData.content}
          onChange={handleChange}
          required
          className="p-3 border rounded-md h-40 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          {initialData ? "Update Blog" : "Publish Blog"}
        </button>
      </form>
    </div>
  );
};

export default CreateForm;
