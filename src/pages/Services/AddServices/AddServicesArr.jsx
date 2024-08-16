// import TextFieldsIcon from '@mui/icons-material/TextFields';
// import DescriptionIcon from '@mui/icons-material/Description';
// import ImageIcon from '@mui/icons-material/Image';
import { Description, Image, Lens, TextFields } from '@mui/icons-material';

const iconCss = `absolute top-2 border-r border-black peer-focus:text-violet-700 left-1 text-gray-700`;


const addServiceArr = [
    {
        'type': 'text',
        'id': 'title',
        'name': 'title',
        'label': 'Title',
        'placeholder': 'Enter the service title',
        'icon': <TextFields className={iconCss} />,
        'required': true
    },
    {
        'type': 'text',
        'id': 'slug',
        'name': 'slug',
        'label': 'Slug',
        'placeholder': 'Generated from title',
        'icon': <Lens className={iconCss} />,
        'required': true,
        'disabled': true
    },
    {
        'type': 'file',
        'id': 'image',
        'name': 'image',
        'label': 'Image',
        'placeholder': 'Upload an image',
        'icon': <Image className={iconCss} />,
        'required': false
    },
    {
        'type': 'dynamictextarea',
        'id': 'description',
        'name': 'description',
        'label': 'Description',
        'placeholder': 'Enter the service description',
        'icon': <Description className={iconCss} />,
        'required': true
    },
    {
        'type': 'textarea',
        'id': 'meta_description',
        'name': 'meta_description',
        'label': 'Meta Description',
        'placeholder': 'Enter meta description for SEO',
        'icon': <Description className={iconCss} />,
        'required': false,
        'help_text': 'Meta description for SEO purposes'
    },
];

export default addServiceArr;
