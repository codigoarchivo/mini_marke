import React from "react";

export const Categoryadd = () => {
  return (
    <>
      <div class="crude-form__wrapper" ng-show="triggerForm">
        <h3 ng-show="editForm">Edit user</h3>
        <h3 ng-show="addForm">Add user</h3>
        <form name="userForm" ng-model="userForm">
          <div class="form-group">
            <label for="name">Name</label>
            <input
              class="form-control"
              id="editName"
              type="text"
              name="name"
              ng-model="crudFormName"
              placeholder="Edit name"
              required="required"
            />
            <div
              class="form-alert alert alert-danger"
              ng-show="userForm.name.$invalid &amp;&amp; userForm.name.$touched"
            >
              Please input name
            </div>
          </div>
          <div class="form-group">
            <label for="country">Country</label>
            <input
              class="form-control"
              id="editCounty"
              type="text"
              name="country"
              ng-model="crudFormCountry"
              placeholder="Edit country"
              required="required"
            />
            <div
              class="form-alert alert alert-danger"
              ng-show="userForm.country.$invalid &amp;&amp; userForm.country.$touched"
            >
              Please input user country
            </div>
          </div>
          <div class="form-group">
            <label for="salary">Salary</label>
            <input
              class="form-control"
              id="editSalary"
              type="number"
              name="salary"
              ng-model="crudFormSalary"
              placeholder="Edit salary"
              min="1"
              required="required"
            />
            <div
              class="form-alert alert alert-danger"
              ng-show="userForm.salary.$invalid &amp;&amp; userForm.salary.$touched"
            >
              <span ng-show="userForm.salary.$error.number">
                Please input valid number
              </span>
              <span ng-show="userForm.salary.$error.min">
                Please input salary greater than 1
              </span>
              <span ng-show="userForm.salary.$error.required">
                Please input salary
              </span>
            </div>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              class="form-control"
              id="editEmail"
              type="email"
              name="email"
              ng-model="crudFormEmail"
              ng-change="checkEmail(editUserId)"
              placeholder="Edit email"
              required="required"
              min="1"
            />
          </div>
          <div
            class="form-alert alert alert-danger"
            ng-show="userForm.email.$invalid &amp;&amp; userForm.email.$touched"
          >
            <span ng-show="userForm.email.$error.email">
              Please input valid email
            </span>
            <span ng-show="userForm.email.$error.required">
              Please input email
            </span>
          </div>
          <div class="form-alert alert alert-danger" ng-show="emailExisted">
            This email has been registerd by other user
          </div>
          <button
            class="btn btn-primary"
            ng-click="saveEdit(editUserId)"
            ng-disabled="userForm.$invalid || emailExisted"
          >
            {" "}
            <i class="glyphicon glyphicon-pencil"> </i>Save change
          </button>
          <button class="btn btn-primary" ng-click="triggerForm = false">
            Cancel
          </button>
        </form>
      </div>
    </>
  );
};
