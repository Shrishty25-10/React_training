import React from "react";

const Form = () => {
  return (
    <div data-testid="main-form">
        
      <form action="">
        <div><img alt="Poster" src="https://png.pngtree.com/element_our/20200609/ourmid/pngtree-form-selection-image_2230074.jpg" /></div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" placeholder="write your name" />
        <br/>
        <select>
          <option value="">State</option>
          <option value="AL">Alabama</option>
          <option selected defaultValue="AK">
            Alaska
          </option>
          <option value="AZ">Arizona</option>
        </select>
      </form>
    </div>
  );
};

export default Form;
