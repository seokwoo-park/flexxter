export const SINGLE_RENDER_LIST_STYLE = `
<style>
.task-wrapper
{ 
  width: 40rem;
  padding: 1rem;
  display: flex;
  align-items:center;
  flex-flow : row-wrap;
  gap: 1rem;
  border-radius : 10px;
  -webkit-box-shadow: 0px 0px 24px -5px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 0px 24px -5px rgba(66, 68, 90, 1);
  box-shadow: 0px 0px 24px -5px rgba(66, 68, 90, 1);
} 
.task-wrapper__title{
  color: #53a8b6;
  font-weight:500;
  font-size : 1.1rem;
  margin-bottom : 0.25rem;
}

.task-wrapper__desc{
  font-weight:300;
  font-size : 0.95rem;
}

label {
  width : 150px;
  position: relative;
  cursor: pointer;
}

input[type="checkbox"] {
  position: absolute;
  left: -999em;
}

input[type="checkbox"] + span:before {
  content: "";
  display: inline-block;
  width: 25px;
  height: 25px;
  margin: 0 8px 0 0;
  vertical-align: middle;
  border: 3px solid silver;
  border-radius: 3px;
  font: bold 18px/7px Verdana, sans-serif;
  color: #339;
}

input[type="checkbox"]:checked + span:before {
  content: "✓";
  border-color: #5cb85c;
  font-size:41px;
  color:#5cb85c;
}

input[type="checkbox"]:disabled + span:before {
  content: "...";
  text-align:center;
  border-color: red;
  font-size:20px;
  color:red;
  cursor:wait;
}
</style>
`;
