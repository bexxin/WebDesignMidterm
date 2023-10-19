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
      <div><label>Qualifications:</label></div>
      <div>
        <label><input
            type="checkbox"
            name="highSchool"
            checked={formData.qualifications.highSchool}
            onChange={handleCheckboxChange}
          />
          High School (10th):
          
        </label>
      </div>
      <div>
        <label><input
            type="checkbox"
            name="higherSchool"
            checked={formData.qualifications.higherSchool}
            onChange={handleCheckboxChange}
          />
          Higher School (12th):
          
        </label>
      </div>
      <div>
        <label><input
            type="checkbox"
            name="graduation"
            checked={formData.qualifications.graduation}
            onChange={handleCheckboxChange}
          />
          Graduation (Bachelors):
          
        </label>
      </div>
      <div>
        <label><input
            type="checkbox"
            name="postGrad"
            checked={formData.qualifications.postGrad}
            onChange={handleCheckboxChange}
          />
          Post Grad (Masters):
          
        </label>
      </div>
      <div>
        <label><input
            type="checkbox"
            name="other"
            checked={formData.qualifications.other}
            onChange={handleCheckboxChange}
          />
          Other:
          
        </label>
      </div>
    </div>
  );
}

