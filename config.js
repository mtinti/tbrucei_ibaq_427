let X1='bsf';
let Y1='pcf';
let X2='rank_bsf';
let Y2='rank_pcf';

let Y_LABEL_SCATTER1 = 'iBAQ PCF';
let X_LABEL_SCATTER1 = 'iBAQ BSF';

let Y_LABEL_SCATTER2 = 'Rank PCF';
let X_LABEL_SCATTER2 = 'Rank BSF';

let FLIP_Y1=false;
let FLIP_Y2=false;

let PLOT_WIDTH=550;
let PLOT_HEIGHT=400;

let PROJECT_TITLE='Absolute Protein Quantification 427_2018';
let TAB_TITLE='427 iBAQ'

let _margin_1 = 0;
let _margin_2 = 0;

let _border_1_x = 0;
let _border_1_y = -10;

let _border_2_x = 10;
let _border_2_y = 10;

let BOX_PLOT_COLS_1 = ['BSF_1', 'BSF_10', 'BSF_11', 'BSF_12', 'BSF_13', 'BSF_14', 'BSF_15', 'BSF_16', 'BSF_17', 'BSF_18', 'BSF_19', 'BSF_2', 'BSF_20', 'BSF_21', 'BSF_3', 'BSF_4', 'BSF_5', 'BSF_6', 'BSF_7', 'BSF_8', 'BSF_9']
let BOX_PLOT_COLS_2 = ['PCF_1', 'PCF_10', 'PCF_11', 'PCF_12', 'PCF_13', 'PCF_14', 'PCF_15', 'PCF_16', 'PCF_17', 'PCF_18', 'PCF_19', 'PCF_2', 'PCF_20', 'PCF_21', 'PCF_22','PCF_23', 'PCF_24', 'PCF_25', 'PCF_26', 'PCF_27', 'PCF_3', 'PCF_4', 'PCF_5', 'PCF_6', 'PCF_7', 'PCF_8', 'PCF_9']


//need to manually change conditions in
//xs table (index.html) and scatter plot app (app.js)
let CONDITION_1 = 'BSF'
let CONDITION_2 = 'PCF'


let COLOR_SELECTION_TABLE = 'orange';
let COLOR_SELECTION_CIRCLE = 'orange';

let Y_LABEL_BARPLOT = 'iBAQ';

let File_1 = 'indata.csv';
let File_2 = 'indata2.csv';


//these are th columns to show from file n1
//positions og Gene_acc','Gene_id' must not change
let COLUMNS_TO_TABULATE = ['Gene_acc','Gene_id','bsf','pcf','rank_bsf', 'rank_pcf', 'Desc','prot_group'];