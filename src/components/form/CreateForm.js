import React,{useState} from 'react';
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
                    error={error}
                    label={"Title"}
                />
                <FormTextField 
                    value={item.details}
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
                <FormSubmit edit={edit} status={status} classes={classes} handleSubmit={handleSubmit} />
            </form>
        </>
    )
}

export default CreateForm;