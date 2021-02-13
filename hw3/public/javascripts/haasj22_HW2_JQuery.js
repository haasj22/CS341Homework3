/**
 * AUTHOR: John Haas
 * DATE PRODUCED: February 5, 2021
 * OVERVIEW: A Javascript script that handles basic events
 * 
 * External Citation
 * SOURCE: https://www.w3schools.com/jquery/default.asp
 * DATE ACCESSED: February 5, 2021
 * NOTES: Referenced for most of this page as I haven't used JQuery in 4 years
 */

$(document).ready(function() {
    //hides text that can be shown later
    $("#changable_text").hide();

    //sets default value for notes
    notes_text = "Notes: N/A"

    //updates the notes text every time it is changed
    $("#notes").change(function() {
        notes_text = "Notes: " + $("#notes").val();
    })
    

    $(".order").click(function(){
        //figures out which radio button was selected
        selectedRadioButton = getCurrentlyPressedRadioButton();

        //gets necessary text
        quantity_text = "Quantity: " + $(".quantity_select option:selected").text();
        topping_text = "Topping: " + selectedRadioButton;

        //hides old useless components
        hideNoLongerUsefulComponents();
        
        //pops up an aert if the user is vegan
        sendAlertIfUserIsVegan(notes_text)
        
        //actually displays the users order
        displayUsersOrder(quantity_text, topping_text, notes_text)
    });
    
    /*
    External Citation
    SOURCE: https://stackoverflow.com/questions/7838238/how-to-get-id-of-clicked-element-with-jquery
    DATE ACCESSED: February 5, 2021
    NOTES: Allowed the button to change text after being clicked
    */
    $(".date_option").click(function() {
        new_month_text = $(this).attr('id');
        $(".dropbtn").html(function(i, origText) {
            return new_month_text;
        });
    });

    //function that gets the currently pressed radio button
    function getCurrentlyPressedRadioButton() {
        //goes through the radio buttons and gets the one thats pressed
        const topping_radio_buttons = document.querySelectorAll('input[name="topping"]');
        let selectedValue;
        for (const topping_button of topping_radio_buttons) {
            if (topping_button.checked) {
                selectedValue = topping_button.id;
                break;
            }
        }
        return selectedValue;
    }

    //function that hides no longer useful components after button is pressed
    function hideNoLongerUsefulComponents() {
        $(".order").hide();
        $(".cheesecake_quantity_and_topping_table").hide();
        $(".notes").hide();
        $(".notes_label").hide();
    }

    //function that sends the user an alert if they are vegan
    function sendAlertIfUserIsVegan(text_to_analyze) {
        if(notes_text.includes('vegan')) {
            alert("Your life choices are respected at Gordon Ramsey's CheeseCake Emporium.\n" +
            "That being said, cheesecake is a dairy product, you fucking donkey.\n" +
            "Are you sure you want to continue?")
        }
    }

    //function that displays the users order
    function displayUsersOrder(quantity_to_show, topping_to_show, notes_to_show) {
        $("#changable_text").html(function(i, origText) {
            thank_you_text = "Thank you! Your order has been placed";
            beginning_of_specification_text = "Here are the specifications of your order:";
            return thank_you_text + "<br>"  + beginning_of_specification_text + "<br>" + quantity_to_show + "<br>" + topping_to_show + "<br>" + notes_to_show;
        });
        $("#changable_text").show()
    }
    
});