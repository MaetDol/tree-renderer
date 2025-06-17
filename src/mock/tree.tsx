import { Heading } from "../components/Heading";
import { Level1Checkbox } from "../components/Level1Checkbox";
import { Level1Heading } from "../components/Level1Heading";
import { Level2Checkbox } from "../components/Level2Checkbox";
import { Level2Heading } from "../components/Level2Heading";
import { Level3Checkbox } from "../components/Level3Checkbox";
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
      node("Strengthening", renderLevel1Heading, [
        node("Isometric", renderLevel2Checkbox),
        node("Eccentric", renderLevel2Checkbox),
        node("Concentric", renderLevel2Checkbox),
        node("Plyometric", renderLevel2Checkbox),
        node("Open Kinetic Chain", renderLevel2Checkbox),
        node("Closed Kinetic Chain", renderLevel2Checkbox),
      ]),
      node("Stretching", renderLevel1Heading, [
        node("Stretching - Static", renderLevel2Checkbox),
        node("Stretching - Dynamic", renderLevel2Checkbox),
      ]),
      node("Range of Motion", renderLevel1Heading, [
        node("Active", renderLevel2Checkbox),
        node("Passive/Assisted", renderLevel2Checkbox),
        node("Passive", renderLevel2Checkbox),
      ]),
      node("Balance", renderLevel1Heading, [
        node("Balance - Static", renderLevel2Checkbox),
        node("Balance - Dynamic", renderLevel2Checkbox),
      ]),
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
      node("Upper Quarter", renderLevel1Heading, [
        node("Shoulder", renderLevel2Heading, [
          node("Rotator Cuff", renderLevel3Heading),
          node("Teres Major", renderLevel3Checkbox),
          node("Rhomboid", renderLevel3Checkbox),
          node("Deltoid", renderLevel3Checkbox),
          node("Levator Scapulae", renderLevel3Checkbox),
        ]),
        node("Chest", renderLevel2Heading, [
          node("Pectoralis", renderLevel3Checkbox),
          node("Serratus anterior", renderLevel3Checkbox),
        ]),
        node("Elbow & Upper Arm", renderLevel2Heading, [
          node("Elbow flexor", renderLevel3Checkbox),
          node("Elbow extensor", renderLevel3Checkbox),
        ]),
        node("Wrist & Hand & Forearm", renderLevel2Heading, [
          node("Wrist flexor", renderLevel3Checkbox),
          node("Wrist extensor", renderLevel3Checkbox),
          node("Hand - Flexor digitorum", renderLevel3Checkbox),
          node("Hand - Extensor digitorum", renderLevel3Checkbox),
          node("Pronator", renderLevel3Checkbox),
          node("Supinator", renderLevel3Checkbox),
        ]),
      ]),
      node("Lower Quarter", renderLevel1Heading, [
        node("Hip", renderLevel2Heading, [
          node("Iliopsoas", renderLevel3Checkbox),
          node("Hip extensor", renderLevel3Checkbox),
          node("Piriformis", renderLevel3Checkbox),
          node("Hip adductor", renderLevel3Checkbox),
          node("Hip abductor", renderLevel3Checkbox),
          node("TFL", renderLevel3Checkbox),
        ]),
        node("Knee & Upper Leg", renderLevel2Heading, [
          node("Quadriceps", renderLevel3Heading, [
            node("Quadriceps", renderLevel3Checkbox),
            node("Vastus medialis", renderLevel3Checkbox),
          ]),
          node("Hamstring", renderLevel3Checkbox),
        ]),
        node("Foot & Ankle & Lower Leg", renderLevel2Heading, [
          node("Calf", renderLevel3Heading, [
            node("Gastrocnemius", renderLevel3Checkbox),
            node("Soleus", renderLevel3Checkbox),
          ]),
          node("Peroneal muscles", renderLevel3Checkbox),
          node("Tibialis anterior", renderLevel3Checkbox),
          node("Tibialis posterior", renderLevel3Checkbox),
          node("Extensor hallucis longus", renderLevel3Checkbox),
          node("Foot - Extensor digitorum", renderLevel3Checkbox),
          node("Flexor hallucis longus", renderLevel3Checkbox),
          node("Foot - Flexor digitorum", renderLevel3Checkbox),
          node("Plantar Fascia", renderLevel3Checkbox),
        ]),
      ]),
      node("Neck & Trunk", renderLevel1Heading, [
        node("Cervical", renderLevel2Heading, [
          node("Cervical flexor", renderLevel3Checkbox),
          node("Cervical extensor", renderLevel3Checkbox),
          node("Levator scapulae", renderLevel3Checkbox),
        ]),
        node("Thoracic", renderLevel2Heading, [
          node("Erector spinae", renderLevel3Checkbox),
          node("Latissimus dorsi", renderLevel3Checkbox),
          node("Trapezius", renderLevel3Heading, [
            node("Upper trapezius", renderLevel3Checkbox),
            node("Mid-Low trapezius", renderLevel3Checkbox),
          ]),
        ]),
        node("Lumbar & Pelvis", renderLevel2Heading, [
          node("Quadratus lumborum", renderLevel3Checkbox),
          node("Iliopsoas", renderLevel3Checkbox),
          node("Pelvic floor", renderLevel3Checkbox),
          node("Piriformis", renderLevel3Checkbox),
          node("TFL", renderLevel3Checkbox),
        ]),
        node("Abdomen", renderLevel2Heading, [
          node("Rectus abdominis", renderLevel3Checkbox),
          node("Transverse abdominis", renderLevel3Checkbox),
          node("Obliques", renderLevel3Checkbox),
          node("Diaphragm", renderLevel3Checkbox),
        ]),
        node("Head", renderLevel2Heading, [
          node("Face and Skull", renderLevel3Checkbox),
        ]),
      ]),
    ]),
  ]
);

function renderHeading(_, props: Props, children?: any[]) {
  return (
    <Heading
      key={props.id}
      id={props.id}
      label={props.label}
      children={children}
    />
  );
}

function renderLevel1Checkbox(_, props: Props, children?: any[]) {
  return (
    <Level1Checkbox
      key={props.id}
      id={props.id}
      label={props.label}
      children={children}
    />
  );
}

function renderLevel1Heading(_, props: Props, children?: any[]) {
  return (
    <Level1Heading
      key={props.id}
      id={props.id}
      label={props.label}
      children={children}
    />
  );
}

function renderLevel2Heading(_, props: Props, children?: any[]) {
  return (
    <Level2Heading
      key={props.id}
      id={props.id}
      label={props.label}
      children={children}
    />
  );
}

function renderLevel2Checkbox(_, props: Props, children?: any[]) {
  return (
    <Level2Checkbox
      key={props.id}
      id={props.id}
      label={props.label}
      children={children}
    />
  );
}

function renderLevel3Heading(_, props: Props, children?: any[]) {
  return (
    <Level3Heading
      key={props.id}
      id={props.id}
      label={props.label}
      children={children}
    />
  );
}

function renderLevel3Checkbox(_, props: Props, children?: any[]) {
  return (
    <Level3Checkbox
      key={props.id}
      id={props.id}
      label={props.label}
      children={children}
    />
  );
}
