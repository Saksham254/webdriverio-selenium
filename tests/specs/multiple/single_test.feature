Feature: Resolution Check

    I should open url for browser resolution page
    then compare the resolution coming from capabilities and by url

Scenario: Resolution Check
    I open webiste https://whatismyresolution.com/
    Then reach the element and get Text and save it in constant "reso"
    Then Save the resolution capabilities into a constant "resolutionvalue"
    Then compare the resolutions coming from both variable using If
    Then set lambdatus= passed if they are same otherwise failed