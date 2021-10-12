import React, { Component } from "react";
import values from "lodash/values";
import PropTypes from "prop-types";

import TreeNode from "./TreeNode";

const data = {
    // "Register Claim": {
    //     "Phone Number": {
    //         type: "string",
    //         validations: {
    //             maxCount: 12,
    //             minCount: 10,
    //             isNodeOpen: false,
    //         },
    //         isRequired: true,
    //         isProvided: true,
    //         isNodeOpen: false,
    //     },
    //     DOB: {
    //         isNodeOpen: false,
    //     },
    //     Name: {
    //         isNodeOpen: false,
    //     },
    //     isNodeOpen: false,
    // },
    // "Claim Status": {
    //     isNodeOpen: false,
    // },

    id: "1",
    title: "Restaurantinfo",
    displaymessage: "please select the location",
    type: "string",
    text: "",
    value: "",
    contentType: "",
    subtitle: "",
    stage: 1,
    nodes: [
        {
            id: "11",
            title: "Madhapur",
            stage: 1,
            displaymessage: "please select cuisine",
            type: "button",
            text: "Madhapur",
            value: "Madhapur",
            contentType: "imBack",
            subtitle: "",
            isNodeOpen: false,
            nodes: [
                {
                    id: "111",
                    title: "Chinese",
                    stage: 1,
                    displaymessage: "please select restaurant",
                    type: "button",
                    text: "Chinese",
                    value: "Chinese",
                    contentType: "imBack",
                    subtitle: "",
                    nodes: [
                        {
                            id: "1111",
                            title: "BeijingBites",
                            stage: 1,
                            displaymessage: "do you want to reserve a table",
                            type: "button",
                            text: "Beijing Bites",
                            value: "BeijingBites",
                            contentType: "imBack",
                            subtitle: "",
                            isNodeOpen: false,
                            nodes: [
                                {
                                    id: "11111",
                                    title: "confirmation_yes",
                                    stage: 1,
                                    displaymessage:
                                        "do you want to reserve a table",
                                    type: "button",
                                    text: "yes, reserve a table",
                                    value: "yes",
                                    contentType: "imBack",
                                    subtitle: "",
                                    isNodeOpen: false,
                                    nodes: [],
                                },
                                {
                                    id: "11112",
                                    title: "confirmation_no",
                                    stage: 1,
                                    displaymessage:
                                        "do you want to reserve a table",
                                    type: "button",
                                    text: "no,just show address",
                                    value: "BeijingBites",
                                    contentType: "imBack",
                                    subtitle: "",
                                    isNodeOpen: false,
                                    nodes: [
                                        {
                                            id: "111121",
                                            title: "address",
                                            stage: 1,
                                            displaymessage: "address",
                                            type: "string",
                                            text: "acuvate software, gurukul society, madhapur 500081",
                                            value: "BeijingBites",
                                            contentType: "imBack",
                                            subtitle: "",
                                            nodes: [],
                                            isNodeOpen: false,
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            id: "1112",
                            title: "NanKing",
                            stage: 1,
                            displaymessage: "do you want to reserve a table",
                            type: "button",
                            text: "Nan King",
                            value: "NanKing",
                            contentType: "imBack",
                            subtitle: "",
                            isNodeOpen: false,
                            nodes: [],
                        },
                        {
                            id: "1113",
                            title: "Mainlandchina",
                            stage: 1,
                            displaymessage: "do you want to reserve a table",
                            type: "button",
                            text: "Mainland China",
                            value: "Mainlandchina",
                            contentType: "imBack",
                            subtitle: "",
                            isNodeOpen: false,
                            nodes: [],
                        },
                    ],
                    isNodeOpen: false,
                },
                {
                    id: "112",
                    title: "Italian",
                    stage: 1,
                    displaymessage: "please select restaurant",
                    type: "button",
                    text: "Italian",
                    value: "Italian",
                    contentType: "imBack",
                    subtitle: "",
                    isNodeOpen: false,
                    nodes: [
                        {
                            id: "1121",
                            title: "littleitaly",
                            stage: 1,
                            displaymessage: "do you want to reserve a table",
                            type: "button",
                            text: "little italy",
                            value: "littleitaly",
                            contentType: "imBack",
                            subtitle: "",
                            nodes: [],
                            isNodeOpen: false,
                        },
                        {
                            id: "1122",
                            title: "Lustiousitalia",
                            stage: 1,
                            displaymessage: "do you want to reserve a table",
                            type: "button",
                            text: "Lustious italia",
                            value: "Lustiousitalia",
                            contentType: "imBack",
                            subtitle: "",
                            nodes: [],
                            isNodeOpen: false,
                        },
                        {
                            id: "1123",
                            title: "pastaleitaliano",
                            stage: 1,
                            displaymessage: "do you want to reserve a table",
                            type: "button",
                            text: "pasta le italiano",
                            value: "pastaleitaliano",
                            contentType: "imBack",
                            subtitle: "",
                            nodes: [],
                            isNodeOpen: false,
                        },
                    ],
                },
                {
                    id: "113",
                    title: "Rajasthani",
                    stage: 1,
                    displaymessage: "please select restaurant",
                    type: "button",
                    text: "Rajasthani",
                    value: "Rajasthani",
                    contentType: "imBack",
                    subtitle: "",
                    isNodeOpen: false,
                    nodes: [
                        {
                            id: "1131",
                            title: "sanjhachula",
                            stage: 1,
                            displaymessage: "do you want to reserve a table",
                            type: "button",
                            text: "sanjha chula",
                            value: "sanjhachula",
                            contentType: "imBack",
                            subtitle: "",
                            nodes: [],
                        },
                        {
                            id: "1132",
                            title: "spicybeats",
                            stage: 1,
                            displaymessage: "do you want to reserve a table",
                            type: "button",
                            text: "spicy beats",
                            value: "spicybeats",
                            contentType: "imBack",
                            subtitle: "",
                            nodes: [],
                        },
                    ],
                },
            ],
        },
        {
            id: "12",
            title: "Kukatpally",
            stage: 1,
            displaymessage: "please select cuisine",
            type: "button",
            text: "Kukatpally",
            value: "Kukatpally",
            contentType: "imBack",
            subtitle: "",
            nodes: [],
            isNodeOpen: false,
        },
        {
            id: "13",
            title: "JubileeHills",
            stage: 1,
            displaymessage: "please select cuisine",
            type: "button",
            text: "Jubliee Hills",
            value: "Jubilee Hills",
            contentType: "imBack",
            subtitle: "",
            nodes: [],
            isNodeOpen: false,
        },
    ],
    isNodeOpen: false,
};

export default class Tree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nodes: data,
        };
    }

    getRootNodes = () => {
        const { nodes } = this.state;
        return nodes.nodes;
    };

    getChildNodes = (node) => {
        return node.nodes;
    };

    updateIsOpenForNode = (node, id) => {
        if (node.id === id) {
            return {
                ...node,
                isNodeOpen: !node.isNodeOpen,
            };
        }
        return {
            ...node,
            nodes: node.nodes.map((ele) => {
                return {
                    ...this.updateIsOpenForNode(ele, id),
                };
            }),
        };
    };

    onToggle = (node) => {
        const { nodes } = this.state;
        this.setState({
            nodes: this.updateIsOpenForNode(nodes, node.id),
        });
    };

    onNodeSelect = (node) => {
        // const { onSelect } = this.props;
        // onSelect(node);
    };

    render() {
        const rootNodes = this.getRootNodes();

        return (
            <div>
                {rootNodes.map((node, index) => (
                    <TreeNode
                        node={node}
                        getChildNodes={this.getChildNodes}
                        onToggle={this.onToggle}
                        onNodeSelect={this.onNodeSelect}
                        key={index}
                    />
                ))}
            </div>
        );
    }
}

Tree.propTypes = {
    onSelect: PropTypes.func.isRequired,
};
