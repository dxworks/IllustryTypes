declare module "types/fileproperties" {
    export interface FileProperties {
        filePath: string;
        type: string;
        delimiter?: string;
    }
}
declare module "types/illustrations" {
    export enum IllustrationTypes {
        CHART = "chart",
        WORLD_CLOUD = "word-cloud",
        PLOTLY = "plotly",
        TIMELINE = "timeline",
        FORCE_DIRECTED_GRAPH = "force-directed-graph",
        TREEMAP = "treemap",
        SANKEY = "sankey",
        CALENDAR = "calendar",
        MATRIX = "matrix",
        GRAPHVIZ = "graphviz",
        HIERARCHICAL_EDGE_BUNDLING = "hierarchical-edge-bundling"
    }
    export interface Illustration {
        projectName: string;
        type: IllustrationTypes | IllustrationTypes[];
        description?: string;
        name: string;
        tags?: string[];
        data: NodeLink | CalendarHeatmap | Timeline | any;
        createdAt?: Date;
        lastModified?: Date;
    }
    export interface IllustrationUpdate {
        projectName: string;
        type: IllustrationTypes | IllustrationTypes[];
        description?: string;
        name: string;
        tags?: string[];
        data: NodeLink | CalendarHeatmap | Timeline | any;
        createdAt?: Date;
        lastModified?: Date;
    }
    export interface TimelineEventTag {
        name: string;
        style: any;
    }
    export interface TimelineEvent {
        summary: string;
        date: string;
        type: string;
        author: string;
        tags?: TimelineEventTag[];
        description?: string;
        style: any;
    }
    export interface Timeline {
        [date: string]: {
            summary?: {
                title?: string;
                style?: any;
            };
            events: TimelineEvent[];
        };
    }
    export interface CalendarHeatmap {
        calendar: CalendarData[];
        categories: any;
        tooltip?: any;
    }
    export interface NodeLink {
        nodes: Node[];
        links: Link[];
        colorMapping?: any[];
    }
    export interface CalendarMatrix {
        calendarData: CalendarData[];
    }
    export interface Node {
        group: string;
        id?: string;
        properties?: any | any[];
    }
    export interface Link {
        source: string;
        target: string;
        value: number;
        properties?: any | any[];
        style?: any;
    }
    export interface CalendarData {
        date: string;
        value: number;
        year: number;
        category: string;
    }
}
declare module "types/project" {
    export interface Project {
        name: string;
        description?: string;
        createdAt?: Date;
        lastModified?: Date;
    }
}
declare module "index" {
    export { FileProperties } from "types/fileproperties";
    export { IllustrationTypes, Illustration, IllustrationUpdate, TimelineEventTag, TimelineEvent, Timeline, CalendarHeatmap, NodeLink, CalendarMatrix, Node, Link, CalendarData } from "types/illustrations";
    export { Project } from "types/project";
}
