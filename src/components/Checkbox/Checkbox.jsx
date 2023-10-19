import React from "react";

export default function Checkboxes({ formData, setFormData }) {
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      qualifications: {
        ...prevFormData.qualifications,
        [name]: checked,
      },
    }));
  };

  return (
    <div>
      <label>Qualifications:</label>
      <div>
        <label>
          High School (10th):
          <input
            type="checkbox"
            name="highSchool"
            checked={formData.qualifications.highSchool}
            onChange={handleCheckboxChange}
          />
        </label>
      </div>
      <div>
        <label>
          Higher School (12th):
          <input
            type="checkbox"
            name="higherSchool"
            checked={formData.qualifications.higherSchool}
            onChange={handleCheckboxChange}
          />
        </label>
      </div>
      <div>
        <label>
          Graduation (Bachelors):
          <input
            type="checkbox"
            name="graduation"
            checked={formData.qualifications.graduation}
            onChange={handleCheckboxChange}
          />
        </label>
      </div>
      <div>
        <label>
          Post Grad (Masters):
          <input
            type="checkbox"
            name="postGrad"
            checked={formData.qualifications.postGrad}
            onChange={handleCheckboxChange}
          />
        </label>
      </div>
      <div>
        <label>
          Other:
          <input
            type="checkbox"
            name="other"
            checked={formData.qualifications.other}
            onChange={handleCheckboxChange}
          />
        </label>
      </div>
    </div>
  );
}

