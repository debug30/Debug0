import Modal from "../../utils/ui/Modal";
import { useState } from "react";

const ProjectForm = () => {
  const [projectData, setProjectData] = useState({
    image: "",
    githubUrl: "",
    description: "",
    techStacks: "",
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;

    if (name === "image" && files && files[0]) {
      // If an image file is selected, set the image preview
      const reader = new FileReader();
      reader.onload = () => {
        // setImagePreview(reader);
      };
      reader.readAsDataURL(files[0]);
    }

    setProjectData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Handle form submission here, e.g., send the data to your backend

    // Close the modal or perform any other necessary action
    // You can do this by adding a callback prop to the Modal component
  };

  return (
    <Modal show={true} onCancel={() => {}}>
      <div>
        <h1>ENTER YOUR PROJECT DETAILS</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="image">Project Image:</label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*" // Allow only image files
              onChange={handleChange}
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Project Preview"
                style={{ maxWidth: "100px", maxHeight: "100px" }}
              />
            )}
          </div>
          <div>
            <label htmlFor="githubUrl">GitHub URL:</label>
            <input
              type="text"
              id="githubUrl"
              name="githubUrl"
              value={projectData.githubUrl}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="description">Short Description:</label>
            <textarea
              id="description"
              name="description"
              value={projectData.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <label htmlFor="techStacks">Tech Stacks:</label>
            <input
              type="text"
              id="techStacks"
              name="techStacks"
              value={projectData.techStacks}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </Modal>
  );
};

export default ProjectForm;
