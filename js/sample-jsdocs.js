/**
 * @fileOverview This file is a reference for using jsdoc
 * <br><br><a href="http://code.google.com/p/jsdoc-toolkit/wiki/TagReference">http://code.google.com/p/jsdoc-toolkit/wiki/TagReference</a>
 *
 * @author <a href="mailto:lastralla@hotmail.com">Anthony Bucci</a>
 * @version 1.0.1
 *
 */


/** @constant */
const ACCELERATION = 9.80665;   // not supported in all browsers?

/** @constant */
var APPNAME = "SuperDuper";     // a constant by convention

/** @field */
var settings = {};




/*************************************************************************/ 
/* *************** Example of how classes are documented *************** */
/*************************************************************************/ 

/**
 * Creates a new Person.
 *
 * @class Represents a person.
 * @version 0.1 A basic implementation. Will add superman features in upcoming version.
 *
 * @property {number} id The generated id of the Person.
 * @param {string} fName First name
 * @param {string} lName Last name
 *
 */
function Person(fName, lName) {
    var fName = fName;
    var lName = lName;

    this.id = getId();

    function buildName() {}

}

/** @class */
var Person2 = makeClass(
    /** @lends Person2 */
    {
        initialize: function(name) {
            this.name = name;
        },
        say: function(message) {
            return this.name + " says: " + message;
        }
    }
);

/** @class */
var Person3 = makeClass(
    /** @lends Person3.prototype */
    {
        initialize: function(name) {
            this.name = name;
        },
        say: function(message) {
            return this.name + " says: " + message;
        }
    }
);

// If you are using one of the lent functions to construct the class, you can mark it as such  using 
// the @constructs tag, but remember to remove the @class tag in that case, or else two @classes will be documented. 
// http://code.google.com/p/jsdoc-toolkit/wiki/TagLends
var Person4 = makeClass(
    /** @lends Person4.prototype */
    {
         /** @constructs */
        initialize: function(name) {
            this.name = name;
        },
        say: function(message) {
            return this.name + " says: " + message;
        }
    }
);


/**
 * @private
 * @constructor
 */
function _Foo() {
    function inner() {
    }
    
    this.notPrivate = function() {
    }


    var _somethingPrivate = function(arg1) {}
}


/** @constructor */
function Page(title) {
    /**
     * @default "Undefined"
     */
     this.title = title || "Undefined";
}









var Tools = {};

/** @namespace */
Tools.Dom = {};

/** @memberOf Tools.Dom */
var hiliteSearchTerm = function(term) {


};

Tools.Dom.highlightSearchTerm = hiliteSearchTerm;


/**
 * @type Color
 */
function getColor() {
}


/**
 * @constructor
 */
function GeneralWriter() {
}


/**
 * @constructor
 * @since version 1.0.1
 */
function Remote() {
}

/**
 * Connect to a remote address.
 * @address The address
 * @data The data
 */
Remote.prototype.transfer = function(address, data) {
}

/**
 * @constructor
 * @augments GeneralWriter
 * @borrows Remote#transfer as this.send

 The @augments tag indicates that the class being documented extends another class and adds methods or properties of its own. It is a synonym for the @extends tag.
 */
function SpecialWriter() {
    this.send = Remote.prototype.transfer;
}

/** @namespace */
var Cocktail = {};

/**
 * @event
 * @param {Boolean} clockwise
 */
Cocktail.prototype.stir = function(clockwise) {
}
/**
 * @name Cocktail#shake
 * @event
 * @param {MyEventObject} e
 * @param {Boolean} [e.withIce=false]
 */

 /**
 * @constructor
 * @borrows Cocktail#event:shake as this.event:shake
 */
function MilkShake() {
}

/**
 * @function
 */
var paginate = paginateFactory(pages);


/**
 * @constructor
 * @ignore
 * 
 * Use this to hide stop things from being documented. (i.e. work in progress or temporary stuff)
 * http://code.google.com/p/jsdoc-toolkit/wiki/TagIgnore
 */
function coolTemporary() {
    this.testtest = function() {
    }

    this.testtest2 = function() {
    }
}

/** @namespace */
Hello = {}

/**
 * @static
 */
Hello.World = function() {
    alert("Hello world");
}

/**
 * @class
 * @property {number} id The id of the Account.
 * @property {number|string} group The group of the Account.
 */
function Account(id, group) {
    this.id = id;
    this.group = group;
}

/**
 * @constructor
 */
function Foo2() {
    /**@public*/
    function inner() {
    }
}

/**
 * @requires ColorPicker
 */
function chooseColor() {
}

/** 
 * @throws {OutOfMemeory} If the file is too big.
 */
function processFile(path) {

}

/** 
 * @returns {Array} Lines from the file.
 */
function readLines(filepath) {
}

/**
    @namespace Holds functionality related to running plugins.
*/
Extensions.PluginManager = {
}

Extensions.PluginManager.load(plugin) {
}
