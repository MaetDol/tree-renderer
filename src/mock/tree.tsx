type Raw = string | number | boolean | null | undefined;

export type Node = {
  props: any;
  renderer: (depth: number, props: Node["props"], children?: any[]) => any;
  children?: Node[];
};

let id = 0;
function generateId() {
  return (++id).toString();
}

type Props = {
  label: string;
  id: string;
};

function node(
  label: string,
  renderer: Node["renderer"],
  children: Node[] = []
): Node {
  return {
    props: { label, id: generateId() },
    renderer,
    children: children,
  };
}

export const tree: Node = node(
  "Filter Root Element",
  (_, __, children) => <div>{children}</div>,
  [
    node("Body Region", renderHeading, [
      node("Whole Body", renderLevel1Checkbox),
      node("Shoulder & Chest", renderLevel1Checkbox),
      node("Elbow & Upper Arm", renderLevel1Checkbox),
      node("Wrist & Hand & Forearm", renderLevel1Checkbox),
      node("Hip", renderLevel1Checkbox),
      node("Knee & Upper Leg", renderLevel1Checkbox),
      node("Foot & Ankle & Lower Leg", renderLevel1Checkbox),
      node("Cervical & Neck", renderLevel1Checkbox),
      node("Thoracic & Upper Back", renderLevel1Checkbox),
      node("Lumbar & Pelvis", renderLevel1Checkbox),
      node("Abdomen", renderLevel1Checkbox),
      node("Head", renderLevel1Checkbox),
    ]),

    node("Movement Direction", renderHeading, [
      node("Flexion", renderLevel1Checkbox),
      node("Extension", renderLevel1Checkbox),
      node("Abduction", renderLevel1Checkbox),
      node("Adduction", renderLevel1Checkbox),
      node("Internal Rotation", renderLevel1Checkbox),
      node("External Rotation", renderLevel1Checkbox),
      node("Inversion", renderLevel1Checkbox),
      node("Eversion", renderLevel1Checkbox),
      node("Tilt", renderLevel1Checkbox),
      node("Elevation", renderLevel1Checkbox),
      node("Depression", renderLevel1Checkbox),
      node("Rotation", renderLevel1Checkbox),
      node("Circumduction", renderLevel1Checkbox),
      node("Side Bending", renderLevel1Checkbox),
      node("Protraction", renderLevel1Checkbox),
      node("Retraction", renderLevel1Checkbox),
      node("Pronation", renderLevel1Checkbox),
      node("Supination", renderLevel1Checkbox),
    ]),

    node("Purpose", renderHeading, [
      node("Strengthening", renderLevel1Checkbox),
      node("Stretching", renderLevel1Checkbox),
      node("Range of Motion", renderLevel1Checkbox),
      node("Balance", renderLevel1Checkbox),
      node("Neurologic", renderLevel1Checkbox),
      node("Others", renderLevel1Checkbox),
    ]),

    node("Body Position", renderHeading, [
      node("Supine", renderLevel1Checkbox),
      node("Prone", renderLevel1Checkbox),
      node("Side Lying", renderLevel1Checkbox),
      node("Sitting", renderLevel1Checkbox),
      node("Standing", renderLevel1Checkbox),
      node("Kneeling", renderLevel1Checkbox),
      node("Quadruped", renderLevel1Checkbox),
    ]),

    node("Equipment", renderHeading, [
      node("No equipment", renderLevel1Checkbox),
      node("Towel", renderLevel1Checkbox),
      node("Resistance Band", renderLevel1Checkbox),
      node("Cushion", renderLevel1Checkbox),
      node("Small Ball", renderLevel1Checkbox),
      node("Big Ball", renderLevel1Checkbox),
      node("Chair", renderLevel1Checkbox),
      node("Wall", renderLevel1Checkbox),
      node("Foam Roller", renderLevel1Checkbox),
      node("Bed", renderLevel1Checkbox),
      node("Table", renderLevel1Checkbox),
      node("Weights", renderLevel1Checkbox),
      node("Strap", renderLevel1Checkbox),
      node("Step box", renderLevel1Checkbox),
      node("Stick", renderLevel1Checkbox),
      node("Bosu Ball", renderLevel1Checkbox),
      node("Balance Pad", renderLevel1Checkbox),
      node("Mat", renderLevel1Checkbox),
      node("Others", renderLevel1Checkbox),
    ]),

    node("Difficulty", renderHeading, [
      node("Very Easy", renderLevel1Checkbox),
      node("Easy", renderLevel1Checkbox),
      node("Medium", renderLevel1Checkbox),
      node("Difficult", renderLevel1Checkbox),
      node("Very Difficult", renderLevel1Checkbox),
    ]),

    node("Muscle", renderHeading, [
      node("Upper Quarter", renderLevel1Checkbox),
      node("Lower Quarter", renderLevel1Checkbox),
      node("Neck & Trunk", renderLevel1Checkbox),
    ]),
  ]
);

function renderHeading(_, props: Props) {
  return <h1 key={props.id}>{props.label}</h1>;
}

function renderLevel1Checkbox(_, props: Props) {
  return <span key={props.id}>ㅁ {props.label}</span>;
}

function renderLevel1Heading(_, props: Props) {
  return <h2 key={props.id}>{props.label}</h2>;
}
