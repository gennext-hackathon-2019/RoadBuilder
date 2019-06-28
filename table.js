    updateDropdown()
    
        function updateDropdown(){
            $(".toggler").click(function() {
            $(this).closest('tr').nextUntil("tr:has(.toggler)").toggle();
            });

            var prodlist = document.getElementById('prod-list');

                var i = 0;
                $('td').each(function(){
                    if($(this).hasClass("toggler")){
                        var val = $(this).text();
                        console.log("val: " + val)
                        prodlist.options[i] = new Option(val, val);
                        i++;
                    }
                        
                });
        }

        // prodlist.options[0] = new Option('--Select--', '');
        // prodlist.options[1] = new Option('Product', 'Product');

        document.getElementById('add-button').addEventListener('click', addFeature, false);

        function addFeature(){
            var prodname =  document.getElementById('prod-list').value
            var month = document.getElementById('month-list').value
            var feature =document.getElementById('addbar').value

            if(feature == ""){
                alert("Cannot add empty feature!");
                return;
            }

            console.log("productname: " + prodname)
            console.log("month: " + month)
            console.log("feature: " + feature)

            var prod = document.getElementById(prodname);
            var child =  $(prod).closest('tr').nextUntil("tr:has(.toggler)")

            var monthnum = 0;
            if(month=="Jan")
                monthnum = 1;
            else if(month=="Feb")
                monthnum = 2;
            else if(month=="Mar")
                monthnum = 3;
            else if(month=="April")
                monthnum = 4;
            else if(month=="May")
                monthnum = 5;
            else if(month=="June")
                monthnum = 6;
            else if(month=="July")
                monthnum = 7;
            else if(month=="Aug")
                monthnum = 8;
            else if(month=="Sep")
                monthnum = 9;
            else if(month=="Oct")
                monthnum = 10;
            else if(month=="Nov")
                monthnum = 11;
            else if(month=="Dec")
                monthnum = 12;

            var current = child.find("td").eq(monthnum).html()
            
            current += feature
            current += "<br>"
            child.find("td").eq(monthnum).html(current)
        }

        document.getElementById('addprod-button').addEventListener('click', addProduct, false);

        function addProduct(){
            var product =  document.getElementById('addprodbar').value

            if(product == ""){
                alert("Cannot add empty product!");
                return;
            }

            console.log($('#grid-selection'))
            var newcol = '<tr> <td class="toggler" colspan="13" id=' + "'" + product + "'>" + product + '</td> </tr>'
            newcol += '<tr class="child" style="display:none"> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>  </tr>'

            $('#grid-selection').append(newcol);

            updateDropdown()

        }