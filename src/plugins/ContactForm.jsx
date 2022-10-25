import { Component} from "react"
import "./ContactForm.css"

const validationRules = {
    required: (val) => val !== null && val !== undefined && val !== '',
    phone: (phone) => {
      const re = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
      return re.test(String(phone));
    },
    email: (email) => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
  }
  
  
  export default class ContactForm extends Component {
    constructor() {
      super();
      
      this.formValidationRules = {
        'firstName': [{rule: validationRules.required, message: 'First name is required'}],
        'lastName': [{rule: validationRules.required, message: 'Last name is required'}],
        'phone': [{rule: validationRules.phone, message: 'Phone number is invalid'}],
        'email': [{rule: validationRules.required, message: 'Email is required'},{rule: validationRules.email, message: 'Email is invalid'}],
      }
      
      this.fields = ['firstName', 'lastName', 'phone', 'email'];
      
      this.state = {
        signupForm: {isValid: false},
        firstName: {value: '', isTouched: false, isValid: false, errors: []},
        lastName: {value: '', isTouched: false, isValid: false, errors: []},
        phone: {value: '234', isTouched: true, isValid: false, errors: []},
        email: {value: '', isTouched: false, isValid: false, errors: []},
      }
    }
    
    handleFieldChange = e => {
      let newState = {...this.state};
      newState[e.target.name].value = e.target.value;
      this.validateForm(newState);
    }
    
    handleSetTouched = e => {
      let field = {...this.state[e.target.name], isTouched: true};
      this.setState({[e.target.name] : {...field}});
    }
    
    getClassName = fieldName => {
      const field = this.state[fieldName];
      return field.isTouched && !field.isValid ? 'has-error' : '';
    }
    
    validateForm = (newState) => {
      newState = newState || {...this.state};
      this.fields.map(fieldName => {
        let newField = newState[fieldName];
        newField.errors = [];
        newField.isValid = true;
        this.formValidationRules[fieldName].map(vRule => {
          if(!vRule.rule(this.state[fieldName].value)){
            newField.errors.push(vRule.message);
            newField.isValid = false;
          }
          newState[fieldName] = newField;
        })
      })
      this.setState(newState);
    }
    
    componentWillMount() {
      this.validateForm();
    }
    
    render() {
      const {firstName, lastName, phone, email} = this.state;
      return (
        <form className="contact-form">
          <div className="field-group">
            <label>First Name</label>
            <input
              className={firstName.isTouched && !firstName.isValid ? 'has-error' : ''}
              name="firstName"
              value={firstName.value}
              onChange={this.handleFieldChange}
              onBlur={this.handleSetTouched}
              />
            {firstName.isTouched && firstName.errors.length > 0 && firstName.errors.map((err, i) => (<span key={i} className="error-message">{err}</span>))}
          </div> 
          <div className="field-group">
            <label>Last Name</label>
            <input
              className={lastName.isTouched && !lastName.isValid ? 'has-error' : ''}
              name="lastName"
              value={this.state.lastName.value}
              onChange={this.handleFieldChange}
              onBlur={this.handleSetTouched}
              />
            {lastName.isTouched && lastName.errors.length > 0 && lastName.errors.map((err, i) => (<span key={i} className="error-message">{err}</span>))}
          </div> 
          <div className="field-group">
            <label>Phone</label>
            <input
              className={phone.isTouched && !phone.isValid ? 'has-error' : ''}
              name="phone"
              value={this.state.phone.value}
              onChange={this.handleFieldChange}
              onBlur={this.handleSetTouched}
              />
            {phone.isTouched && phone.errors.length > 0 && phone.errors.map((err, i) => (<span key={i} className="error-message">{err}</span>))}
          </div> 
          <div className="field-group">
            <label>Email</label>
            <input
              className={email.isTouched && !email.isValid ? 'has-error' : ''}
              name="email"
              value={this.state.email.value}
              onChange={this.handleFieldChange}
              onBlur={this.handleSetTouched}
              />
            {email.isTouched && email.errors.length > 0 && email.errors.map((err, i) => (<span key={i} className="error-message">{err}</span>))}
          </div> 
        </form>
      )
    }
  }
  
  
  
  
  
  
  