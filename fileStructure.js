//queue
function Queue() {
    this._oldestIndex = 1;
    this._newestIndex = 1;
    this._storage = {};
}
 
Queue.prototype.size = function() {
    return this._newestIndex - this._oldestIndex;
};
 
Queue.prototype.enqueue = function(data) {
    this._storage[this._newestIndex] = data;
    this._newestIndex++;
};
 
Queue.prototype.dequeue = function() {
    var oldestIndex = this._oldestIndex,
        newestIndex = this._newestIndex,
        deletedData;
 
    if (oldestIndex !== newestIndex) {
        deletedData = this._storage[oldestIndex];
        delete this._storage[oldestIndex];
        this._oldestIndex++;
 
        return deletedData;
    }
};


//tree
function Node(data) {
    this.data = data;
    this.parent = null;
    this.children = [];
}

function Tree(data) {
    var node = new Node(data);
    this._root = node;
}

Tree.prototype.traverseDF = function(callback) {
 
    // this is a recurse and immediately-invoking function 
    (function recurse(currentNode) {
        // step 2
        for (var i = 0, length = currentNode.children.length; i < length; i++) {
            // step 3
            recurse(currentNode.children[i]);
        }
 
        // step 4
        callback(currentNode);
         
        // step 1
    })(this._root);
 
};

Tree.prototype.traverseBF = function(callback) {
    var queue = new Queue();
     
    queue.enqueue(this._root);
 
    currentTree = queue.dequeue();
 
    while(currentTree){
        for (var i = 0, length = currentTree.children.length; i < length; i++) {
            queue.enqueue(currentTree.children[i]);
        }
 
        callback(currentTree);
        currentTree = queue.dequeue();
    }
};

Tree.prototype.contains = function(callback, traversal) {
    traversal.call(this, callback);
};

Tree.prototype.add = function(data, toData, traversal) {
    var child = new Node(data),
        parent = null,
        callback = function(node) {
            if (node.data === toData) {
                parent = node;
            }
        };
 
    this.contains(callback, traversal);
 
    if (parent) {
        parent.children.push(child);
        child.parent = parent;
    } else {
        throw new Error('Cannot add node to a non-existent parent.');
    }
};

Tree.prototype.remove = function(data, fromData, traversal) {
    var tree = this,
        parent = null,
        childToRemove = null,
        index;
 
    var callback = function(node) {
        if (node.data === fromData) {
            parent = node;
        }
    };
 
    this.contains(callback, traversal);
 
    if (parent) {
        index = findIndex(parent.children, data);
 
        if (index === undefined) {
            throw new Error('Node to remove does not exist.');
        } else {
            childToRemove = parent.children.splice(index, 1);
        }
    } else {
        throw new Error('Parent does not exist.');
    }
 
    return childToRemove;
};

function findIndex(arr, data) {
    var index;
 
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].data === data) {
            index = i;
        }
    }
 
    return index;
}

//set up leaf nodes
var bing = {
	name: "bing",
	type: "txt",
	catput: "Binghamton University (SUNY) - 2013-2017\nBachelor of Science in Computer Science and Bachelor of Science in Mathematics, expected May 2017\nGPA: 3.54/4.00\nIBM/Watson Fellows Scholar, each fall since 2013\nUpsilon Pi Epsilon honor society member since December 2014, chapter treasurer since April 2015\nPi Mu Epsilon honor society member since April 2015\nCS Courses:\n\tCurrent: CS471 (Programming Languages), CS440 (Advanced Topics in Object Oriented Programming)\n\tPast: CS140 (intro to OOP), CS240 (data structures and algorithms), CS320 (advanced architecture), CS350 (operating systems), CS373 (automata and formal languages), CS375 (design and analysis of algorithms)\nMath Courses:\n\tCurrent: MATH404 (Advanced Linear Algebra)\n\tPast: MATH304 (linear algebra), MATH323 (calculus III), MATH330 (number systems), MATH375 (functions of complex variables), MATH478-479 (real analysis I and II), MATH461 (topology)",
	lines: 16
};
var bxsci = {
	name: "bxsci",
	type: "txt",
	catput: "Bronx High School of Science, class of 2013\nqualified for 2013 AIME\nwon the Samuel Greitzer computer science award\nTreasurer of Latin Club; played in the jazz band",
	lines: 4
};
var jyard = {
	name: "juilliard",
	type: "txt",
	catput: "The Juilliard School, Pre-College Division, class of 2013\nStudied composition under Manuel Sosa; took courses in music theory, counterpoint, and ear training",
	lines: 2
};
var nyspi = {
	name: "nyspi",
	type: "txt",
	catput: "New York State Psychiatric Institute (NYSPI)\nColumbia University Medical Center\nPsyIT Volunteer\nEncrypted computers with BitLocker\nWrote a software tool in Java to help determine, from Excel sheets, which computers should be banned from the network",
	lines: 6
};
var strongLanguages = {
	name: "strong",
	type: "txt",
	catput: "Java, C++, C",
	lines: 1
};
var familiarLanguages = {
	name: "familiar",
	type: "txt",
	catput: "SWI-Prolog, C#, Python, x86 and MIPS assembly, HTML, CSS, JavaScript",
	lines: 1
};
var software = {
	name: "software",
	type: "txt",
	catput: "Emacs, Eclipse, Git, UNIX Terminal",
	lines: 1
};
var otherSkills = {
	name: "other",
	type: "txt",
	catput: "Other skills:\nLatin; vibraphone (and other percussion), piano, electric bass; composing, arranging, Sibelius 5, Sibelius 7", lines: 3
};
var OS = {
	name: "os",
	type: "txt",
	catput: "Operating Systems:\nExperience using Mac OS X, Linux (Ubuntu, Debian), Windows",
	lines: 2
};
var acm = {
	name: "acm",
	type: "txt",
	catput: "ACM Projects Division\nDevelop a website, as project manager, similar to ratemyprofessors.com, but for classes\n\t- Should include an interactive graphical prerequisite flowchart",
	lines: 3
};
var competitions = {
	name: "competitions",
	type: "txt",
	catput: "Programming Competitions:\nBinghamton ACM February 2016 competition: won 2nd place\nHackerRank World Cup - University Level CodeSprint (September 2015): Qualified for Semifinals\nBinghamton ACM September 2015 competition: placed 18th",
	lines: 6
};
var pennappsXI = {
	name:"pennappsXI",
	type: "txt",
	catput: "Built, with a team, a website that sped up updates by using bytewise subtraction rather than deleting and rewriting",
	lines: 2
};

//now, set up stuff from the top down
var rootDir = {
	name: "resume",
	type: "dir",
	catput: "cat: resume: Is a directory",
	lines: 1
};
var skills = {
	name: "skills",
	type: "dir",
	catput: "cat: skills: Is a directory",
	lines: 1
};
var education = {
	name: "education",
	type: "dir",
	catput: "cat: education: Is a directory",
	lines: 1
};
var experiences = {
	name: "experiences",
	type: "dir",
	catput: "cat: experiences: Is a directory",
	lines: 1
};
var languages = {
	name: "languages",
	type: "dir",
	catput: "cat: languages: Is a directory",
	lines: 1
};

var tree = new Tree(rootDir);
tree.add(skills, rootDir, tree.traverseBF);
tree.add(education, rootDir, tree.traverseBF);
tree.add(experiences, rootDir, tree.traverseBF);
tree.add(bing, education, tree.traverseBF);
tree.add(bxsci, education, tree.traverseBF);
tree.add(jyard, education, tree.traverseBF);
tree.add(languages, skills, tree.traverseBF);
tree.add(strongLanguages, languages, tree.traverseDF);
tree.add(familiarLanguages, languages, tree.traverseDF);
tree.add(software, skills, tree.traverseDF);
tree.add(OS, skills, tree.traverseDF);
tree.add(otherSkills, skills, tree.traverseDF);
tree.add(nyspi, experiences, tree.traverseBF);
tree.add(acm, experiences, tree.traverseBF);
tree.add(competitions, experiences, tree.traverseBF);
tree.add(pennappsXI, experiences, tree.traverseBF);