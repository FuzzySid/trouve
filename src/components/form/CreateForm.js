import React,{useState} from 'react';
import CategorySelector from './elements/CategorySelector';
import DeadlineSelector from './elements/DeadlineSelector';
import FormHeader from './elements/FormHeader';
import FormSubmit from './elements/FormSubmit';
import FormTextField from './elements/TextField';


const CreateForm=({
    classes,
    handleInputChange,
    handleSubmit,
    error,
    category,
    handleCategoryChange,
    deadline,
    setDeadline
})=>{
    return(
        <>
            <FormHeader classes={classes}/>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <FormTextField 
                    handleChange={handleInputChange}
                    classes={classes}
                    error={error}
                    label={"Title"}
                />
                <FormTextField 
                    handleChange={handleInputChange}
                    classes={classes}
                    error={error}
                    label={"Details"}
                    isMultiline
                    rows={4}
                />
                <CategorySelector
                    classes={classes}
                    category={category}
                    handleCategoryChange={handleCategoryChange}
                />
                {
                category==='Todos' &&
                    <DeadlineSelector 
                    classes={classes}
                    deadline={deadline}
                    setDeadline={setDeadline}
                />
                }   
                <FormSubmit classes={classes} handleSubmit={handleSubmit} />
            </form>
        </>
    )
}

export default CreateForm;