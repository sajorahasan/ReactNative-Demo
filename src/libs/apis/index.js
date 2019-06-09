/****** WILL BE DELETED ****/
import log from "@log";
import strings from "@language";
import _ from "lodash";

import {
  STANDARD_CHECKBOXES,
  STANDARD_QUESTIONS,
  STANDARD_DOMAINS,
  DEPARTMENTS,
  GRADES,
  STUDENTS,
  TEACHERS,
  TEMPLATES,
  COUNTRIES
} from "./local";
/****** WILL BE DELETED ****/

import auth from "./auth";
import user from "./user";
import teacher from "./teacher";
import defaults from "./defaults";

class apis {}

/*** Authentication ***/
apis.login = auth.login;
apis.forgetPassword = auth.forgetPassword;
apis.register = auth.register;
apis.verify = auth.verify;
/*** Authentication ***/

/***  User ***/
apis.getAccountDetails = user.getAccountDetails;
apis.updateAccountDetails = user.updateAccountDetails;
apis.saveSignature = user.saveSignature;
apis.getDefaultEmailTemplate = user.getDefaultEmailTemplate;
apis.updateEmailTemplate = user.updateEmailTemplate;
apis.addDepartment = user.addDepartment;
apis.addGrade = user.addGrade;
apis.editDepartment = user.editDepartment;
apis.editGrade = user.editGrade;
/***  User ***/

/*** Teacher ***/
apis.addTeacher = teacher.addTeacher;
apis.addBulkTeacher = teacher.addBulkTeacher;
apis.updateTeacher = teacher.updateTeacher;
apis.getTeacherDetails = teacher.getTeacherDetails;
/*** Teacher ***/

/*** Defaults ***/
apis.getDefaultDepartsAndGrades = defaults.getDefaultDepartsAndGrades;
/*** Defaults ***/

// Get Standard Countries List
apis.getCountries = () => {
  log.success(strings.apiSuccess, COUNTRIES);
  return COUNTRIES;
};

/****** WILL BE DELETED ****/
// Get Standard Templates with Domains, Questions and Checkboxes
apis.getStandardTemplates = () => {
  let domains = _.map(STANDARD_DOMAINS, d => {
    d.questions = _.map(STANDARD_QUESTIONS, q => {
      q.checkbox = STANDARD_CHECKBOXES;
      return q;
    });
    return d;
  });
  log.success(strings.apiSuccess, domains);
  return domains;
};
// Get Standard Checkboxes
apis.getStandardCheckboxes = () => {
  log.success(strings.apiSuccess, STANDARD_CHECKBOXES);
  return STANDARD_CHECKBOXES;
};

// Get Standard Domains
apis.getStandardDomains = () => {
  log.success(strings.apiSuccess, STANDARD_DOMAINS);
  return STANDARD_DOMAINS;
};

// Get Standard Domains
apis.getStandardQuestions = () => {
  log.success(strings.apiSuccess, STANDARD_QUESTIONS);
  return STANDARD_QUESTIONS;
};

// Get Departments
apis.getDepartments = () => {
  log.success(strings.apiSuccess, DEPARTMENTS);
  return DEPARTMENTS;
};

// Get Students
apis.getGrades = () => {
  log.success(strings.apiSuccess, GRADES);
  return GRADES;
};

// Get Students
apis.getStudents = () => {
  log.success(strings.apiSuccess, STUDENTS);
  return STUDENTS;
};

// Get Teachers
apis.getTeachers = () => {
  log.success(strings.apiSuccess, TEACHERS);
  return TEACHERS;
};

// Get Templates
apis.getTemplates = () => {
  let templates = _.map(TEMPLATES, t => {
    t.domains = _.map(STANDARD_DOMAINS, d => {
      d.questions = _.map(STANDARD_QUESTIONS, q => {
        q.checkbox = STANDARD_CHECKBOXES;
        return q;
      });
      return d;
    });
    return t;
  });
  log.success(strings.apiSuccess, templates);
  return templates;
};
/****** WILL BE DELETED ****/

export default apis;
