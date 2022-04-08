import { Container, Header, Form, Message, Input } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import { useSelector, useDispatch} from "react-redux";
import { insertStream } from "../services/apiService.jsx";
import { useNavigate } from "react-router";


const validate = (values) => {
  
  const errors = {};
  if (!values.title) {
    errors.title = "You must enter a title";
  }
  if (!values.description) {
    errors.description = "You must enter a description";
  }
  return errors;
};

const renderInput = ({ input, meta, label }) => (
  
  <Form.Field error={meta.error && meta.touched} className="input-field">
    <label className="input-lbl">{label}</label>
    <Input {...input} error className="input-area"/>
    {meta.error && meta.touched && <Message color="red">{meta.error}</Message>}
  </Form.Field>
);

let StreamCreate = ({ handleSubmit, submitting }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.userId);
  const onSubmit = (values) => {
    if (userId === null) return;
    const sendValues = {
      title: values.title,
      description: values.description,
      userId: userId,
    };
 
  
    dispatch(insertStream(sendValues)); 
    navigate(-1);
  };

  return (
    
    <Container className="container-2">
      <Header as="h1" content="Create a Stream"  className="header"/>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Field
          name="title"
          label="Enter Title"
          component={renderInput}
          type="text"
        />
        <Field
          name="description"
          label="Enter Description"
          component={renderInput}
          type="text"
          
        />
        <button
          disabled={submitting}
          className="submit-btn"
          type="submit"
          
        >
          Submit
        </button>
      </Form>
    </Container>
    
    )  
}

StreamCreate = reduxForm({
  form: "create",
  validate,
})(StreamCreate);

export default StreamCreate;

