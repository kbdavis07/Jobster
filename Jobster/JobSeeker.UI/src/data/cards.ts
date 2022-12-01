import ICard from "../interfaces/ICard";
import ICategory from "../interfaces/ICategory";
import IStatus from "../interfaces/IStatus";

const mockCards: ICard[] = [
{
    id: '2fab1909-0b9f-4783-976c-4ffecb805ac6',
    category: ICategory.FEATURE,
        title: 'This is wishlist',
        salary:'$130,000 - $135,000',
    description: 'The button does not contain any feedback, when you click on it, it does nothing',
    status: IStatus.WISHLIST,
    hidden: false
},
  {
    id: '2fab1909-0b9f-4783-976c-4ffecb805ac5',
    category: ICategory.BUG,
      title: 'Reset password button not working',
      salary: '$130,000 - $135,000',
    description: 'The button does not contain any feedback, when you click on it, it does nothing',
    status: IStatus.Interview,
    hidden: true
  },
  {
    id: '5be53f27-a69c-4128-bf40-86cd572267a5',
    category: ICategory.FEATURE,
      title: 'Testing this is mock',
      salary: '$130,000 - $135,000',
    description: 'Testing',
    status: IStatus.APPLIED,
    hidden: false
  },
  {
    id: '6ed5a4b0-1e2c-4b71-ab42-e740f02da496',
    category: ICategory.INFRA,
      title: 'Set up the staging environment',
      salary: '$130,000 - $135,000',
    description: '',
    status: IStatus.APPLIED,
    hidden: false
  },
  {
    id: '55cac86b-c223-4eed-992a-e231e9232d42',
    category: ICategory.DEPLOY,
      title: 'Send first deploy to prod',
      salary: '$130,000 - $135,000',
    description: '',
    status: IStatus.APPLIED,
    hidden: false
  },
  {
    id: '74d031c0-59bb-4f4b-9910-71bb1c88c624',
    category: ICategory.FEATURE,
      title: 'Create landing page',
      salary: '$130,000 - $135,000',
    description: '',
    status: IStatus.Final_Interview,
    hidden: false
  },
  {
    id: 'a04170d8-5f03-4a97-bbd7-cbc9516d0840',
    category: ICategory.REFACTOR,
      title: 'Make the onDragEnd function more efficient',
      salary: '$130,000 - $135,000',
    description: '',
    status: IStatus.Phone_Screen,
    hidden: false
  },
  {
    id: '29065b36-8873-4ccd-8c42-dcff14736650',
    category: ICategory.DEPLOY,
      title: 'Send first deploy to develop environment',
      salary: '$130,000 - $135,000',
    description: '',
    status: IStatus.Final_Interview,
    hidden: false
  },
  {
    id: '32eb3393-eddc-487a-abc3-1c199b86c4a2',
    category: ICategory.FEATURE,
      title: 'Create light and dark theme switch',
      salary: '$130,000 - $135,000',
    description: '',
    status: IStatus.Tech_Interview,
    hidden: false
  },
]

export default mockCards;