import { Heading } from "../components/Heading";
import { Level1Checkbox } from "../components/Level1Checkbox";
import { Level1Heading } from "../components/Level1Heading";
import { Level2Heading } from "../components/Level2Heading";
import { Level3Heading } from "../components/Level3Heading";

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
      node("Whole Body", renderCheckbox),
      node("Shoulder & Chest", renderCheckbox),
      node("Elbow & Upper Arm", renderCheckbox),
      node("Wrist & Hand & Forearm", renderCheckbox),
      node("Hip", renderCheckbox),
      node("Knee & Upper Leg", renderCheckbox),
      node("Foot & Ankle & Lower Leg", renderCheckbox),
      node("Cervical & Neck", renderCheckbox),
      node("Thoracic & Upper Back", renderCheckbox),
      node("Lumbar & Pelvis", renderCheckbox),
      node("Abdomen", renderCheckbox),
      node("Head", renderCheckbox),
    ]),

    node("Movement Direction", renderHeading, [
      node("Flexion", renderCheckbox),
      node("Extension", renderCheckbox),
      node("Abduction", renderCheckbox),
      node("Adduction", renderCheckbox),
      node("Internal Rotation", renderCheckbox),
      node("External Rotation", renderCheckbox),
      node("Inversion", renderCheckbox),
      node("Eversion", renderCheckbox),
      node("Tilt", renderCheckbox),
      node("Elevation", renderCheckbox),
      node("Depression", renderCheckbox),
      node("Rotation", renderCheckbox),
      node("Circumduction", renderCheckbox),
      node("Side Bending", renderCheckbox),
      node("Protraction", renderCheckbox),
      node("Retraction", renderCheckbox),
      node("Pronation", renderCheckbox),
      node("Supination", renderCheckbox),
    ]),

    node("Purpose", renderHeading, [
      node("Strengthening", renderLevel1Heading, [
        node("Isometric", renderCheckbox),
        node("Eccentric", renderCheckbox),
        node("Concentric", renderCheckbox),
        node("Plyometric", renderCheckbox),
        node("Open Kinetic Chain", renderCheckbox),
        node("Closed Kinetic Chain", renderCheckbox),
      ]),
      node("Stretching", renderLevel1Heading, [
        node("Stretching - Static", renderCheckbox),
        node("Stretching - Dynamic", renderCheckbox),
      ]),
      node("Range of Motion", renderLevel1Heading, [
        node("Active", renderCheckbox),
        node("Passive/Assisted", renderCheckbox),
        node("Passive", renderCheckbox),
      ]),
      node("Balance", renderLevel1Heading, [
        node("Balance - Static", renderCheckbox),
        node("Balance - Dynamic", renderCheckbox),
      ]),
      node("Neurologic", renderCheckbox),
      node("Others", renderCheckbox),
    ]),

    node("Body Position", renderHeading, [
      node("Supine", renderCheckbox),
      node("Prone", renderCheckbox),
      node("Side Lying", renderCheckbox),
      node("Sitting", renderCheckbox),
      node("Standing", renderCheckbox),
      node("Kneeling", renderCheckbox),
      node("Quadruped", renderCheckbox),
    ]),

    node("Equipment", renderHeading, [
      node("No equipment", renderCheckbox),
      node("Towel", renderCheckbox),
      node("Resistance Band", renderCheckbox),
      node("Cushion", renderCheckbox),
      node("Small Ball", renderCheckbox),
      node("Big Ball", renderCheckbox),
      node("Chair", renderCheckbox),
      node("Wall", renderCheckbox),
      node("Foam Roller", renderCheckbox),
      node("Bed", renderCheckbox),
      node("Table", renderCheckbox),
      node("Weights", renderCheckbox),
      node("Strap", renderCheckbox),
      node("Step box", renderCheckbox),
      node("Stick", renderCheckbox),
      node("Bosu Ball", renderCheckbox),
      node("Balance Pad", renderCheckbox),
      node("Mat", renderCheckbox),
      node("Others", renderCheckbox),
    ]),

    node("Difficulty", renderHeading, [
      node("Very Easy", renderCheckbox),
      node("Easy", renderCheckbox),
      node("Medium", renderCheckbox),
      node("Difficult", renderCheckbox),
      node("Very Difficult", renderCheckbox),
    ]),

    node("Muscle", renderHeading, [
      node("Upper Quarter", renderLevel1Heading, [
        node("Shoulder", renderLevel2Heading, [
          node("Rotator Cuff", renderLevel3Heading, [
            node("Supraspinatus", renderCheckbox),
            node("Infraspinatus", renderCheckbox),
            node("Subscapularis", renderCheckbox),
            node("Teres minor", renderCheckbox),
          ]),
          node("Teres Major", renderCheckbox),
          node("Rhomboid", renderCheckbox),
          node("Deltoid", renderCheckbox),
          node("Levator Scapulae", renderCheckbox),
        ]),
        node("Chest", renderLevel2Heading, [
          node("Pectoralis", renderCheckbox),
          node("Serratus anterior", renderCheckbox),
        ]),
        node("Elbow & Upper Arm", renderLevel2Heading, [
          node("Elbow flexor", renderCheckbox),
          node("Elbow extensor", renderCheckbox),
        ]),
        node("Wrist & Hand & Forearm", renderLevel2Heading, [
          node("Wrist flexor", renderCheckbox),
          node("Wrist extensor", renderCheckbox),
          node("Hand - Flexor digitorum", renderCheckbox),
          node("Hand - Extensor digitorum", renderCheckbox),
          node("Pronator", renderCheckbox),
          node("Supinator", renderCheckbox),
        ]),
      ]),
      node("Lower Quarter", renderLevel1Heading, [
        node("Hip", renderLevel2Heading, [
          node("Iliopsoas", renderCheckbox),
          node("Hip extensor", renderCheckbox),
          node("Piriformis", renderCheckbox),
          node("Hip adductor", renderCheckbox),
          node("Hip abductor", renderCheckbox),
          node("TFL", renderCheckbox),
        ]),
        node("Knee & Upper Leg", renderLevel2Heading, [
          node("Quadriceps", renderLevel3Heading, [
            node("Quadriceps", renderCheckbox),
            node("Vastus medialis", renderCheckbox),
          ]),
          node("Hamstring", renderCheckbox),
        ]),
        node("Foot & Ankle & Lower Leg", renderLevel2Heading, [
          node("Calf", renderLevel3Heading, [
            node("Gastrocnemius", renderCheckbox),
            node("Soleus", renderCheckbox),
          ]),
          node("Peroneal muscles", renderCheckbox),
          node("Tibialis anterior", renderCheckbox),
          node("Tibialis posterior", renderCheckbox),
          node("Extensor hallucis longus", renderCheckbox),
          node("Foot - Extensor digitorum", renderCheckbox),
          node("Flexor hallucis longus", renderCheckbox),
          node("Foot - Flexor digitorum", renderCheckbox),
          node("Plantar Fascia", renderCheckbox),
        ]),
      ]),
      node("Neck & Trunk", renderLevel1Heading, [
        node("Cervical", renderLevel2Heading, [
          node("Cervical flexor", renderCheckbox),
          node("Cervical extensor", renderCheckbox),
          node("Levator scapulae", renderCheckbox),
        ]),
        node("Thoracic", renderLevel2Heading, [
          node("Erector spinae", renderCheckbox),
          node("Latissimus dorsi", renderCheckbox),
          node("Trapezius", renderLevel3Heading, [
            node("Upper trapezius", renderCheckbox),
            node("Mid-Low trapezius", renderCheckbox),
          ]),
        ]),
        node("Lumbar & Pelvis", renderLevel2Heading, [
          node("Quadratus lumborum", renderCheckbox),
          node("Iliopsoas", renderCheckbox),
          node("Pelvic floor", renderCheckbox),
          node("Piriformis", renderCheckbox),
          node("TFL", renderCheckbox),
        ]),
        node("Abdomen", renderLevel2Heading, [
          node("Rectus abdominis", renderCheckbox),
          node("Transverse abdominis", renderCheckbox),
          node("Obliques", renderCheckbox),
          node("Diaphragm", renderCheckbox),
        ]),
        node("Head", renderLevel2Heading, [
          node("Face and Skull", renderCheckbox),
        ]),
      ]),
    ]),
  ]
);

function renderHeading(depth: number, props: Props, children?: any[]) {
  return (
    <Heading
      key={props.id}
      id={props.id}
      label={props.label}
      children={children}
    />
  );
}

function renderCheckbox(depth: number, props: Props, children?: any[]) {
  return (
    <Level1Checkbox
      key={props.id}
      id={props.id}
      label={props.label}
      children={children}
      depth={depth}
    />
  );
}

function renderLevel1Heading(depth: number, props: Props, children?: any[]) {
  return (
    <Level1Heading
      key={props.id}
      id={props.id}
      label={props.label}
      children={children}
      depth={depth}
    />
  );
}

function renderLevel2Heading(depth: number, props: Props, children?: any[]) {
  return (
    <Level2Heading
      key={props.id}
      id={props.id}
      label={props.label}
      children={children}
      depth={depth}
    />
  );
}

function renderLevel3Heading(depth: number, props: Props, children?: any[]) {
  return (
    <Level3Heading
      key={props.id}
      id={props.id}
      label={props.label}
      children={children}
      depth={depth}
    />
  );
}
