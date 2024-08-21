import React from 'react'
import CustomForms from '../../../../CommonComponent/CustomForm/CustomForm'

const QuickInquiryForm = () => {
    const arr = [
        {
            'name': 'name',
            'type': 'text',
            'placeholder': "Enter Name"
        },
        {
            'name': 'email',
            'placeholder': "Enter Email",
            'type': 'email'
        },
        {
            'name': 'phone',
            'placeholder': "Enter Phone no.",
            'type': 'number'
        },
        {
            'name': 'message',
            'type': 'textarea',
            'placeholder': "Message"
        },
    ]
    return (
        <CustomForms
            fieldsArr={arr}
            route_name={'none'}
            title={'Quick Enquiry'}
        />
    )
}

export default QuickInquiryForm
