// Instance the tour
var tour = new Tour({
  steps: [

    {
      element: "#theImg",
      title: "Data Visualization App",
      content: "This little tour will show you some of the functionalities of this website"
    },

    {
      element: "#plot1",
      title: "Left Scatter Plot",
      content: "This plot shows a scatter plot between two conditions"
    },

    {
      element: "#plot2",
      title: "Right Scatter Plot",
      content: "This plot shows a scatter plot between two conditions"
    },

    {
      element: "#bar_chart",
      title: "Bar Chart",
      content: "This plot show the raw values between conditions"
    },
    

    {
      element: "#aa1aa",
      title: "Gene Highlight",
      content: "Hovering over the dots to highlight in both scatter plots, \
      in the table and to update the bar plot"
    },
  
    {
      element: "#aa5aa",
      title: "Add Label",
      content: "Clik on a circle to add a label  <br> \
      double clcik again to remove the label",
    },


  {
    element: "#plot2",
    title: "Drag Selection",
    content: "Dragging a selection box will \
    activate the zoom. Click somewhere in the plot area and without release move the mouse pointer to draw \
    a rectangle <br> The selected genes inside the rectangle area will appear in the table. \
    <br>Double click to reset the zoom",
  },


  {
      element: "#table_wrapper",
      title: "Table Highlight",
      content: "Hovering on the table rows will highlight the circle \
      in the scatter plots plots and update the bar plot"
  },

  {
      element: "#table_filter",
      title: "Search Table",
      content: "Search with id or description"
  },

  {
    element: "#seach_visible",
    title: "Search From Table",
    content: "After searching the table all the visible ids can be visualized at once"
  },


  {
    element: "#textAreaIDs",
    title: "Search Multiple IDs",
    content: "You can input several protein IDs at the same time to visualise in the table and plots"
  },

  {
    element: "#colorpicker_div",
    title: "Search Color",
    content: "You can select wich color to use to visualise the input ids on the scatter plots"
  },

  {
    element: "#prot_id",
    title: "Protein bar plot",
    content: "Hovering over the id will highlight the cicles \
    in the scatter plots and in the table"
  },


  {
    element: "#button_2",
    title: "Save/Download the image",
    content: "Click on this button to save the plot as an SVG file"
  },

  //{
  //  element: "#theImg",
  //  title: "<h3>WELL DONE!!!<h3>",
  //  content: "you won a spacial prize for following this tour to the end!<br>\
  //  <button id='button_3' type='submit' class='btn btn-primary' onclick='run_joke();'>Redeem</button>"
  //},

]});