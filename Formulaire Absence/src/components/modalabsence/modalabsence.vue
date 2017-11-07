<style>
</style>
<template>
   <div class="modal fade" id="modalFormAbsence" tabindex="-1" role="dialog" aria-labelledby="#modalFormAbsenceLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalFormAbsenceLabel">Faire une demande d'absence</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <fieldset style="text-align: center">
            <legend></legend>
            <div class="form-group row" >
              <label class="col-sm-3 ">Du :</label>
              <div class="col-sm-6">
                <datepickerdebut id="dateDebut" value="{{ dateDebut }}" format="DD-MM-YYYY" name="start" id="dateDebut"></datepickerdebut>
              </div>
            </div>
            <div class="form-group row" >
              <label class="col-sm-3 col-form-label">Au :</label>
              <div class="col-sm-6">
                <datepickerfin id="dateFin" value="{{ dateFin }}" format="DD-MM-YYYY" name="end" id="dateFin"></datepickerfin>
              </div>
            </div>
            <div class="form-group row" >
              <label class="col-sm-3 ">Type :</label>
              <type value="{{options}}" id="type"></type>
            </div>
            <div class="form-group row" >
              <label class="col-sm-3 col-form-label" value="" id="mot">Mot :</label>
              <div class="col-md-6">
                <mot></mot>
              </div>
            </div>
          </fieldset>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Annuler</button>
          <button type="button" class="btn btn-success" onclick="">Valider</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DatepickerDebutComponent from './datepicker/DatepickerDebut.vue'
import DatepickerFinComponent from './datepicker/DatepickerFin.vue'
import TypeComponent from './type/type.vue'
import MotComponent from './mot/mot.vue'

export default {
// Lecture des composants externe pour le Modal
  components: {
    'datepickerdebut': DatepickerDebutComponent,
    'datepickerfin': DatepickerFinComponent,
    'type': TypeComponent,
    'mot': MotComponent
  }
}
</script>
