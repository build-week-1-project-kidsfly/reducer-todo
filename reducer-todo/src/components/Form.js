import React, { useState } from "react";

const Form = props => {
  const { iteminput, handleChanges } = props;

  return (
    <div>
      <form>
        <label>
          Todo
          <input
            type="text"
            name="item"
            value={iteminput}
            onChange={handleChanges}
            placeholder="What should I do?"
          />
        </label>
      </form>
    </div>
  );
};

export default Form;
