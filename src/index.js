import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Dictionary from './dictionary.service';

function displayDefinition(response) {
  if (response.main) {
    $("#display-definition").text()
  }
}