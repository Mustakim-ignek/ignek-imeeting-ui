// import React from 'react'
// import styles from './styles.module.css'

// export const ExampleComponent = ({ text }) => {
//   return <div className={styles.test}>Example Component: {text}</div>
// }

import Button from "./components/Button/Button";
import PageLoader from "./components/Loader/PageLoader";
import Input from './components/Input/Input'
import SelectInput from './components/SelectInput/SelectInput';
import CustomDataTable from './components/Table/CustomDataTable';
import MultipleFileUploadField from './components/FileUpload/FileUpload';
import UploadImage from './components/ImageUpload/ImageUpload';
import MultipleSelect from './components/SelectInput/MultipleSelect';
import ModalBase from './components/Modals/ModalBase';
import Tabs from "./components/Tabs/Tabs";
import SimpleTable from "./components/Table/SimpleTable";
import {createNameImage, getRandomColor} from './components/NameImageGenrator/NameImage'

import "@clayui/css/lib/css/atlas.css";

export {
  Button,
  PageLoader,
  Input,
  SelectInput,
  CustomDataTable,
  MultipleFileUploadField,
  UploadImage,
  MultipleSelect,
  ModalBase,
  Tabs,
  SimpleTable,
  createNameImage,
  getRandomColor
}