import ManageableItem from "./ManageableItem.js";

class Folder extends ManageableItem {
    #children = [];

    constructor(name, backgroundColor, children) {
        super();

        this.name = name;
        this.backgroundColor = backgroundColor

        if (Array.isArray(children)) {
            this.#setChildren(children);
        }
    }

    isRoot() {
        return !this.getParent();
    }

    #setChildren(children) {
        this.#children = children
    }

    getChildren() {
        return this.#children;
    }

    removeChild(child) {
        this.#setChildren(this.getChildren().filter(v => v !== child))
    }

    addChild(child) {
        this.getChildren().push(child);
    }

    contains(item) {
        for (const child of this.getChildren()) {
            if (child === item) return true;
        }

        return false;
    }
}

export default Folder;