import React from 'react';
import CategorySelector from './elements/CategorySelector';
import DeadlineSelector from './elements/DeadlineSelector';
import FormHeader from './elements/FormHeader';
import FormSubmit from './elements/FormSubmit';
import FormTextField from './elements/TextField';


const CreateForm=({
    edit=false,
    item,
    classes,
    handleInputChange,
    handleSubmit,
    error,
    category,
    handleCategoryChange,
    deadline,
    setDeadline,
    status
})=>{
    return(
        <>
            <FormHeader edit={edit} classes={classes}/>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <FormTextField 
                    value={item.title}
                    handleChange={handleInputChange}
                    classes={classes}
                    error={error.title}
                    label={"Title"}
                />
                <FormTextField 
                    value={item.details}
                    handleChange={handleInputChange}
                    classes={classes}
                    error={error.details}
                    label={"Details"}
                    isMultiline
                    rows={4}
                    required={false}
                />
                <CategorySelector
                    classes={classes}
                    category={category}
                    handleCategoryChange={handleCategoryChange}
                />
                <DeadlineSelector 
                    category={category}
                    classes={classes}
                    deadline={deadline}
                    setDeadline={setDeadline}
                /> 
                <FormSubmit edit={edit} status={status} classes={classes} handleSubmit={handleSubmit} />
            </form>
        </>
    )
}

export default CreateForm;