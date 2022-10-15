Feature: The user should be able to view the list of opportunities, so that i can select an opportunity

Background:
    * url 'https://tms-api.tms.imerit-playground.io/api/v1/'

Scenario:View all the list of opportunities
    Given path 'requirements'
    When method get
    Then status 200
    Then print response

    * def first = response[1]

    Given path 'requirements', first.opportunityId
    When method get
    Then status 200
    Then print response
    Then match first.name == "Kitware"
    Then match first.startDate == "2022-10-22T01:44:25.189Z"
    Then match first.role == "Operator"
    Then match first.segment == "CV","NLP"
    Then match first.resourcesRequired == 100, 95


Scenario:View all the details of the opportunity
    Given path 'requirements/e211e011-5694-46ec-9d41-a455774f79ea'
    When method get
    Then status 200
    Then print response

    * def first = response[1]

    Then match first.name == "Senetra"
    Then match first.startDate == "2022-11-02T20:11:52.434Z","2038-09-19T15:29:11.219Z"
    Then match first.role == "Operator"
    Then match first.segment == "CV","NLP"
    Then match first.resourcesRequired == 43, 92
    Then match first.allocationPercent == 77,81
    Then match first.assignedTo == ["Riya"]
    Then match first.status == "New"



