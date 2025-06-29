import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";

const AddProject = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const newProject = {
      id: `project-${uuidv4().slice(0, 4)}`,
      name: data.name,
      category: data.category,
      completionDate: data.completionDate,
      description: data.description,
      technologies: data.technologies.split(",").map((tech) => tech.trim()),
      features: data.features.split(",").map((f) => f.trim()),
      liveUrl: data.liveUrl,
      clientRepo: data.clientRepo,
      serverRepo: data.serverRepo,
      image: data.image,
    };

    try {
      const res = await axios.post(
        "http://localhost:3000/projects",
        newProject
      );

      if (res.status === 201) {
        Swal.fire({
          icon: "success",
          title: "Project Added!",
          text: "Your project has been successfully added.",
          timer: 3000,
          timerProgressBar: true,
          showConfirmButton: false,
          background: "#FFFBDE",
          color: "#254D70",
        });

        reset();
      }
    } catch (error) {
      console.error("Error adding project:", error);
      Swal.fire({
        icon: "error",
        title: "Failed to Add Project",
        text: "Something went wrong. Please try again later.",
        confirmButtonColor: "#954C2E",
        background: "#FFFBDE",
        color: "#254D70",
      });
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto bg-[#FFFBDE] shadow-lg rounded-xl text-[#254D70]">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#131D4F]">
        Add New Project
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        <Input label="Project Name" name="name" register={register} />
        <Input label="Category" name="category" register={register} />
        <Input label="Completion Date" name="completionDate" type="date" register={register} />
        <TextArea label="Description" name="description" register={register} />
        <Input label="Technologies (comma-separated)" name="technologies" register={register} />
        <TextArea label="Features (comma-separated)" name="features" register={register} />
        <Input label="Live URL" name="liveUrl" register={register} />
        <Input label="Client GitHub Repo" name="clientRepo" register={register} />
        <Input label="Server GitHub Repo" name="serverRepo" register={register} />
        <Input label="Image Path (/images/projects/example.webp)" name="image" register={register} />

        <button
          type="submit"
          className="bg-[#954C2E] text-[#EFE4D2] py-2 rounded-lg hover:bg-[#7c3b23] transition"
        >
          Submit to API
        </button>
      </form>
    </div>
  );
};

const Input = ({ label, name, register, type = "text" }) => (
  <div>
    <label className="font-medium block mb-1">{label}</label>
    <input
      {...register(name, { required: true })}
      type={type}
      name={name}
      className="w-full p-2 border border-[#91C8E4] rounded-lg"
      required
    />
  </div>
);

const TextArea = ({ label, name, register }) => (
  <div>
    <label className="font-medium block mb-1">{label}</label>
    <textarea
      {...register(name, { required: true })}
      rows="4"
      name={name}
      className="w-full p-2 border border-[#91C8E4] rounded-lg"
      required
    />
  </div>
);

export default AddProject;
