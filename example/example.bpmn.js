export default `<?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:signavio="http://www.signavio.com" id="sid-edcb32b0-ba3c-4331-9874-58685c514c55" targetNamespace="http://www.signavio.com" expressionLanguage="http://www.w3.org/TR/XPath" exporter="Signavio Process Editor, http://www.signavio.com" exporterVersion="15.4.0" xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL http://www.omg.org/spec/BPMN/2.0/20100501/BPMN20.xsd">
  <error id="sid-c4218475-d7d4-4ee6-ae73-5d44c49114b8" />
  <process id="rootProcess" name="Root" processType="None" isClosed="false" isExecutable="false">
    <startEvent id="sid-6687E2F4-B03D-4E57-A62B-68FA642BE19C">
      <outgoing>sid-89A3F9F2-CCC8-46C7-816B-DD8AC8A98300</outgoing>
    </startEvent>
    <parallelGateway id="parallelGateway" gatewayDirection="Diverging">
      <incoming>sid-89A3F9F2-CCC8-46C7-816B-DD8AC8A98300</incoming>
      <outgoing>sid-F06605E1-AEC1-4B39-8843-4AD3F547B557</outgoing>
      <outgoing>sid-FC2ECAF5-771E-4ED3-BEF6-EFAB45E79500</outgoing>
    </parallelGateway>
    <subProcess id="collapsedProcess" name="Collapsed Process">
      <incoming>sid-F06605E1-AEC1-4B39-8843-4AD3F547B557</incoming>
      <outgoing>sid-31F6EC44-E44C-4121-B4FE-BD69AF208C05</outgoing>
      <startEvent id="sid-AB14D824-C8B9-4211-B224-C5AF8CED8BBD">
        <outgoing>sid-EB275CF2-5EF1-44FA-B41B-71EB37CC2657</outgoing>
      </startEvent>
      <task id="sid-9E3BA75C-29DD-4DAC-8283-8FDE4E9A6724" name="Check Items">
        <incoming>sid-EB275CF2-5EF1-44FA-B41B-71EB37CC2657</incoming>
        <outgoing>sid-FB543319-8DFB-4445-AAA3-720137FB230B</outgoing>
      </task>
      <subProcess id="expandedProcess" name="Expanded Process">
        <extensionElements>
          <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff" />
          <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000" />
        </extensionElements>
        <incoming>sid-FB543319-8DFB-4445-AAA3-720137FB230B</incoming>
        <outgoing>sid-B99D259B-1BD5-45FF-BD57-FB99C360BAC0</outgoing>
        <startEvent id="sid-3B0273A0-FE3B-4525-9E1F-FBAE2F53C2E7">
          <outgoing>sid-472B540C-A0CD-46F4-9640-DF692EC1BFFC</outgoing>
        </startEvent>
        <subProcess id="collapsedProcess_2" name="Collapsed Process 2">
          <incoming>sid-472B540C-A0CD-46F4-9640-DF692EC1BFFC</incoming>
          <outgoing>sid-910420B0-D11B-4F9D-B285-703D8AC0BA90</outgoing>
          <startEvent id="sid-C67DBACD-2E96-4A69-97F0-9B04CCB255EC">
            <outgoing>sid-A7460113-CB75-491D-817B-5E1A8C606B8C</outgoing>
          </startEvent>
          <task id="sid-3459D5A6-4E18-4133-8362-0418AC9CE830" name="Call External Supplier">
            <incoming>sid-A7460113-CB75-491D-817B-5E1A8C606B8C</incoming>
            <outgoing>sid-01982395-64E8-43EF-A6D3-CDD276C312AA</outgoing>
          </task>
          <endEvent id="sid-987C40F8-82D3-4637-ABCE-A85A5E2AB8A9">
            <incoming>sid-01982395-64E8-43EF-A6D3-CDD276C312AA</incoming>
          </endEvent>
          <sequenceFlow id="sid-A7460113-CB75-491D-817B-5E1A8C606B8C" sourceRef="sid-C67DBACD-2E96-4A69-97F0-9B04CCB255EC" targetRef="sid-3459D5A6-4E18-4133-8362-0418AC9CE830">
          </sequenceFlow>
          <sequenceFlow id="sid-01982395-64E8-43EF-A6D3-CDD276C312AA" sourceRef="sid-3459D5A6-4E18-4133-8362-0418AC9CE830" targetRef="sid-987C40F8-82D3-4637-ABCE-A85A5E2AB8A9">
          </sequenceFlow>
        </subProcess>
        <endEvent id="sid-17C71FEB-D00D-46D0-ACBE-BB424A3EE5A5">
          <incoming>sid-910420B0-D11B-4F9D-B285-703D8AC0BA90</incoming>
        </endEvent>
        <sequenceFlow id="sid-472B540C-A0CD-46F4-9640-DF692EC1BFFC" sourceRef="sid-3B0273A0-FE3B-4525-9E1F-FBAE2F53C2E7" targetRef="collapsedProcess_2">
        </sequenceFlow>
        <sequenceFlow id="sid-910420B0-D11B-4F9D-B285-703D8AC0BA90" sourceRef="collapsedProcess_2" targetRef="sid-17C71FEB-D00D-46D0-ACBE-BB424A3EE5A5">
        </sequenceFlow>
      </subProcess>
      <endEvent id="sid-EE9F103D-15EA-4FBB-A4DB-8B94E5F04390">
        <incoming>sid-B99D259B-1BD5-45FF-BD57-FB99C360BAC0</incoming>
      </endEvent>
      <sequenceFlow id="sid-EB275CF2-5EF1-44FA-B41B-71EB37CC2657" sourceRef="sid-AB14D824-C8B9-4211-B224-C5AF8CED8BBD" targetRef="sid-9E3BA75C-29DD-4DAC-8283-8FDE4E9A6724">
      </sequenceFlow>
      <sequenceFlow id="sid-FB543319-8DFB-4445-AAA3-720137FB230B" sourceRef="sid-9E3BA75C-29DD-4DAC-8283-8FDE4E9A6724" targetRef="expandedProcess">
      </sequenceFlow>
      <sequenceFlow id="sid-B99D259B-1BD5-45FF-BD57-FB99C360BAC0" sourceRef="expandedProcess" targetRef="sid-EE9F103D-15EA-4FBB-A4DB-8B94E5F04390">
      </sequenceFlow>
    </subProcess>
    <subProcess id="sid-D0CDA908-DDCE-4E82-88D0-F1A919B8AE8B" name="Procure Payment">
      <incoming>sid-FC2ECAF5-771E-4ED3-BEF6-EFAB45E79500</incoming>
      <outgoing>sid-5B23450F-AF5E-4519-B134-32107776BD44</outgoing>
      <startEvent id="sid-A13CFBB9-5471-4439-96FA-B65862CA7B21">
        <outgoing>sid-E71F5783-AFE7-44ED-8A9C-378C95087448</outgoing>
      </startEvent>
      <subProcess id="sid-ECEB5194-0BF8-4913-A76F-963DC1FD1D7F" name="Charge Card">
        <incoming>sid-E71F5783-AFE7-44ED-8A9C-378C95087448</incoming>
        <outgoing>sid-6B9741CD-D94B-41C7-A2EA-63A4C9445E16</outgoing>
        <startEvent id="sid-F2CCFED7-AD11-4A21-80EE-71D9C96549C8">
          <outgoing>sid-3BB6D6CA-BF45-4D15-A1AB-64686C41DB32</outgoing>
        </startEvent>
        <task id="sid-29B8F97B-1A0D-4280-A62D-5093316C484B" name="Charge Card">
          <incoming>sid-3BB6D6CA-BF45-4D15-A1AB-64686C41DB32</incoming>
          <outgoing>sid-4E25B80E-EF68-4EE5-BB08-C1F54F1A7C39</outgoing>
        </task>
        <endEvent id="sid-F5AE4FCD-976F-4426-B1FF-7FCAA4CE2393">
          <incoming>sid-4E25B80E-EF68-4EE5-BB08-C1F54F1A7C39</incoming>
        </endEvent>
        <sequenceFlow id="sid-3BB6D6CA-BF45-4D15-A1AB-64686C41DB32" sourceRef="sid-F2CCFED7-AD11-4A21-80EE-71D9C96549C8" targetRef="sid-29B8F97B-1A0D-4280-A62D-5093316C484B">
        </sequenceFlow>
        <sequenceFlow id="sid-4E25B80E-EF68-4EE5-BB08-C1F54F1A7C39" sourceRef="sid-29B8F97B-1A0D-4280-A62D-5093316C484B" targetRef="sid-F5AE4FCD-976F-4426-B1FF-7FCAA4CE2393">
        </sequenceFlow>
      </subProcess>
      <subProcess id="sid-5DCDF44C-56B4-47A2-9085-00004E76F3A8" name="Accounting Stuff, I don&#39;t know">
        <incoming>sid-6B9741CD-D94B-41C7-A2EA-63A4C9445E16</incoming>
        <outgoing>sid-1A9DABC6-6079-4BF2-9D49-C4DC9569C519</outgoing>
        <startEvent id="sid-2098A7EE-D7D8-405E-AF61-95BA48E891B6">
          <outgoing>sid-E5404926-738D-4447-87FE-FC6DD1E8BEFC</outgoing>
        </startEvent>
        <task id="sid-E21C867A-7A56-46DD-9A1E-94C02FDB18FB" name="Accounting Stuff, I don&#39;t know">
          <incoming>sid-E5404926-738D-4447-87FE-FC6DD1E8BEFC</incoming>
          <outgoing>sid-FED62A8F-6C3A-4BB2-8DE9-18FB0B35B50E</outgoing>
        </task>
        <endEvent id="sid-DAFD7764-8FA5-417B-BB33-55E483687A7D">
          <incoming>sid-FED62A8F-6C3A-4BB2-8DE9-18FB0B35B50E</incoming>
        </endEvent>
        <sequenceFlow id="sid-E5404926-738D-4447-87FE-FC6DD1E8BEFC" sourceRef="sid-2098A7EE-D7D8-405E-AF61-95BA48E891B6" targetRef="sid-E21C867A-7A56-46DD-9A1E-94C02FDB18FB">
        </sequenceFlow>
        <sequenceFlow id="sid-FED62A8F-6C3A-4BB2-8DE9-18FB0B35B50E" sourceRef="sid-E21C867A-7A56-46DD-9A1E-94C02FDB18FB" targetRef="sid-DAFD7764-8FA5-417B-BB33-55E483687A7D">
        </sequenceFlow>
      </subProcess>
      <endEvent id="sid-345BB5A6-CE3B-4711-972A-81E47BA4B667">
        <incoming>sid-1A9DABC6-6079-4BF2-9D49-C4DC9569C519</incoming>
      </endEvent>
      <sequenceFlow id="sid-E71F5783-AFE7-44ED-8A9C-378C95087448" sourceRef="sid-A13CFBB9-5471-4439-96FA-B65862CA7B21" targetRef="sid-ECEB5194-0BF8-4913-A76F-963DC1FD1D7F">
        <extensionElements>
          <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000" />
        </extensionElements>
      </sequenceFlow>
      <sequenceFlow id="sid-6B9741CD-D94B-41C7-A2EA-63A4C9445E16" sourceRef="sid-ECEB5194-0BF8-4913-A76F-963DC1FD1D7F" targetRef="sid-5DCDF44C-56B4-47A2-9085-00004E76F3A8">
        <extensionElements>
          <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000" />
        </extensionElements>
      </sequenceFlow>
      <sequenceFlow id="sid-1A9DABC6-6079-4BF2-9D49-C4DC9569C519" sourceRef="sid-5DCDF44C-56B4-47A2-9085-00004E76F3A8" targetRef="sid-345BB5A6-CE3B-4711-972A-81E47BA4B667">
      </sequenceFlow>
    </subProcess>
    <parallelGateway id="sid-7412307A-1A0F-43BA-933B-6E84157B4E5B" gatewayDirection="Converging">
      <incoming>sid-5B23450F-AF5E-4519-B134-32107776BD44</incoming>
      <incoming>sid-31F6EC44-E44C-4121-B4FE-BD69AF208C05</incoming>
      <outgoing>sid-F7DA1903-6A1A-4858-AF4B-286A968C957F</outgoing>
    </parallelGateway>
    <boundaryEvent id="sid-C586DCF2-0B1B-4878-8042-F9869023F21B" attachedToRef="sid-D0CDA908-DDCE-4E82-88D0-F1A919B8AE8B">
      <outgoing>sid-DCB98638-BEBD-4548-B501-F0E29AC71ED4</outgoing>
      <errorEventDefinition id="sid-804c8ce9-8013-49e6-a6f5-bf97d24f6cf0" errorRef="sid-c4218475-d7d4-4ee6-ae73-5d44c49114b8" />
    </boundaryEvent>
    <endEvent id="sid-A53C38A9-456B-4AC9-9D4A-6EC9663BA77C">
      <incoming>sid-DCB98638-BEBD-4548-B501-F0E29AC71ED4</incoming>
    </endEvent>
    <subProcess id="parallelGateway_withoutContent" name="Ship Items (todo)">
      <incoming>sid-F7DA1903-6A1A-4858-AF4B-286A968C957F</incoming>
      <outgoing>sid-3FAE72F2-4037-4CBA-8B89-01D7FC7FF3E3</outgoing>
    </subProcess>
    <endEvent id="sid-DA90DE99-58B0-4371-B71D-87A718ACB64D">
      <incoming>sid-3FAE72F2-4037-4CBA-8B89-01D7FC7FF3E3</incoming>
    </endEvent>
    <sequenceFlow id="sid-89A3F9F2-CCC8-46C7-816B-DD8AC8A98300" sourceRef="sid-6687E2F4-B03D-4E57-A62B-68FA642BE19C" targetRef="parallelGateway">
    </sequenceFlow>
    <sequenceFlow id="sid-F06605E1-AEC1-4B39-8843-4AD3F547B557" sourceRef="parallelGateway" targetRef="collapsedProcess">
    </sequenceFlow>
    <sequenceFlow id="sid-FC2ECAF5-771E-4ED3-BEF6-EFAB45E79500" sourceRef="parallelGateway" targetRef="sid-D0CDA908-DDCE-4E82-88D0-F1A919B8AE8B">
    </sequenceFlow>
    <sequenceFlow id="sid-5B23450F-AF5E-4519-B134-32107776BD44" sourceRef="sid-D0CDA908-DDCE-4E82-88D0-F1A919B8AE8B" targetRef="sid-7412307A-1A0F-43BA-933B-6E84157B4E5B">
    </sequenceFlow>
    <sequenceFlow id="sid-31F6EC44-E44C-4121-B4FE-BD69AF208C05" sourceRef="collapsedProcess" targetRef="sid-7412307A-1A0F-43BA-933B-6E84157B4E5B">
    </sequenceFlow>
    <sequenceFlow id="sid-DCB98638-BEBD-4548-B501-F0E29AC71ED4" sourceRef="sid-C586DCF2-0B1B-4878-8042-F9869023F21B" targetRef="sid-A53C38A9-456B-4AC9-9D4A-6EC9663BA77C">
    </sequenceFlow>
    <sequenceFlow id="sid-F7DA1903-6A1A-4858-AF4B-286A968C957F" sourceRef="sid-7412307A-1A0F-43BA-933B-6E84157B4E5B" targetRef="parallelGateway_withoutContent">
    </sequenceFlow>
    <sequenceFlow id="sid-3FAE72F2-4037-4CBA-8B89-01D7FC7FF3E3" sourceRef="parallelGateway_withoutContent" targetRef="sid-DA90DE99-58B0-4371-B71D-87A718ACB64D">
    </sequenceFlow>
  </process>
  <bpmndi:BPMNDiagram id="sid-cbeafa41-c891-415c-ab0d-3eb4a233f9ed">
    <bpmndi:BPMNPlane id="sid-5fb4720f-4b99-4727-8770-dd4166bcd5e4" bpmnElement="rootProcess">
      <bpmndi:BPMNEdge id="sid-3FAE72F2-4037-4CBA-8B89-01D7FC7FF3E3_gui" bpmnElement="sid-3FAE72F2-4037-4CBA-8B89-01D7FC7FF3E3">
        <omgdi:waypoint x="675" y="215" />
        <omgdi:waypoint x="720" y="215" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="sid-F7DA1903-6A1A-4858-AF4B-286A968C957F_gui" bpmnElement="sid-F7DA1903-6A1A-4858-AF4B-286A968C957F">
        <omgdi:waypoint x="530" y="215.41484716157206" />
        <omgdi:waypoint x="575" y="215.2183406113537" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="sid-DCB98638-BEBD-4548-B501-F0E29AC71ED4_gui" bpmnElement="sid-DCB98638-BEBD-4548-B501-F0E29AC71ED4">
        <omgdi:waypoint x="420" y="370" />
        <omgdi:waypoint x="420" y="427.89053746720595" />
        <omgdi:waypoint x="515" y="428" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="sid-31F6EC44-E44C-4121-B4FE-BD69AF208C05_gui" bpmnElement="sid-31F6EC44-E44C-4121-B4FE-BD69AF208C05">
        <omgdi:waypoint x="445" y="110" />
        <omgdi:waypoint x="510.5" y="110" />
        <omgdi:waypoint x="510.5" y="195" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="sid-5B23450F-AF5E-4519-B134-32107776BD44_gui" bpmnElement="sid-5B23450F-AF5E-4519-B134-32107776BD44">
        <omgdi:waypoint x="445" y="315" />
        <omgdi:waypoint x="510.5" y="315" />
        <omgdi:waypoint x="510.5" y="235" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="sid-FC2ECAF5-771E-4ED3-BEF6-EFAB45E79500_gui" bpmnElement="sid-FC2ECAF5-771E-4ED3-BEF6-EFAB45E79500">
        <omgdi:waypoint x="255.5" y="235" />
        <omgdi:waypoint x="255.5" y="315" />
        <omgdi:waypoint x="345" y="315" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="sid-F06605E1-AEC1-4B39-8843-4AD3F547B557_gui" bpmnElement="sid-F06605E1-AEC1-4B39-8843-4AD3F547B557">
        <omgdi:waypoint x="255.5" y="195" />
        <omgdi:waypoint x="255.5" y="110" />
        <omgdi:waypoint x="345" y="110" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="sid-89A3F9F2-CCC8-46C7-816B-DD8AC8A98300_gui" bpmnElement="sid-89A3F9F2-CCC8-46C7-816B-DD8AC8A98300">
        <omgdi:waypoint x="190" y="215.09316770186336" />
        <omgdi:waypoint x="235" y="215.37267080745343" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="sid-6687E2F4-B03D-4E57-A62B-68FA642BE19C_gui" bpmnElement="sid-6687E2F4-B03D-4E57-A62B-68FA642BE19C">
        <omgdc:Bounds x="160" y="200" width="30" height="30" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="parallelGateway_gui" bpmnElement="parallelGateway">
        <omgdc:Bounds x="235" y="195" width="40" height="40" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="collapsedProcess_gui" bpmnElement="collapsedProcess" isExpanded="false">
        <omgdc:Bounds x="345" y="70" width="100" height="80" />
        <bpmndi:BPMNLabel labelStyle="sid-c53530f5-9da8-4535-ae6d-c94859ea5b93">
          <omgdc:Bounds x="352.99214363098145" y="102" width="84.08571243286133" height="12" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="sid-D0CDA908-DDCE-4E82-88D0-F1A919B8AE8B_gui" bpmnElement="sid-D0CDA908-DDCE-4E82-88D0-F1A919B8AE8B" isExpanded="false">
        <omgdc:Bounds x="345" y="275" width="100" height="80" />
        <bpmndi:BPMNLabel labelStyle="sid-c53530f5-9da8-4535-ae6d-c94859ea5b93">
          <omgdc:Bounds x="349.520715713501" y="307" width="91.02856826782227" height="12" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="sid-7412307A-1A0F-43BA-933B-6E84157B4E5B_gui" bpmnElement="sid-7412307A-1A0F-43BA-933B-6E84157B4E5B">
        <omgdc:Bounds x="490" y="195" width="40" height="40" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="sid-A53C38A9-456B-4AC9-9D4A-6EC9663BA77C_gui" bpmnElement="sid-A53C38A9-456B-4AC9-9D4A-6EC9663BA77C">
        <omgdc:Bounds x="515" y="413.89053746720595" width="28" height="28" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="parallelGateway_withoutContent_gui" bpmnElement="parallelGateway_withoutContent" isExpanded="false">
        <omgdc:Bounds x="575" y="175" width="100" height="80" />
        <bpmndi:BPMNLabel labelStyle="sid-c53530f5-9da8-4535-ae6d-c94859ea5b93">
          <omgdc:Bounds x="595.7207126617432" y="201" width="58.62857437133789" height="24" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="sid-DA90DE99-58B0-4371-B71D-87A718ACB64D_gui" bpmnElement="sid-DA90DE99-58B0-4371-B71D-87A718ACB64D">
        <omgdc:Bounds x="720" y="201" width="28" height="28" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="sid-C586DCF2-0B1B-4878-8042-F9869023F21B_gui" bpmnElement="sid-C586DCF2-0B1B-4878-8042-F9869023F21B">
        <omgdc:Bounds x="405" y="340" width="30" height="30" />
      </bpmndi:BPMNShape>
    </bpmndi:BPMNPlane>
    <bpmndi:BPMNLabelStyle id="sid-c53530f5-9da8-4535-ae6d-c94859ea5b93">
      <omgdc:Font name="Arial" size="12" isBold="false" isItalic="false" isUnderline="false" isStrikeThrough="false" />
    </bpmndi:BPMNLabelStyle>
  </bpmndi:BPMNDiagram>
  <bpmndi:BPMNDiagram id="sid-99a6a759-9161-4f4a-a83d-9ad6b9fbdc7e">
    <bpmndi:BPMNPlane id="sid-62501c88-ba6c-44ea-90f1-3ccf6a7cea2f" bpmnElement="collapsedProcess">
      <bpmndi:BPMNShape id="sid-AB14D824-C8B9-4211-B224-C5AF8CED8BBD_gui" bpmnElement="sid-AB14D824-C8B9-4211-B224-C5AF8CED8BBD">
        <omgdc:Bounds x="150" y="140" width="30" height="30" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="sid-9E3BA75C-29DD-4DAC-8283-8FDE4E9A6724_gui" bpmnElement="sid-9E3BA75C-29DD-4DAC-8283-8FDE4E9A6724">
        <omgdc:Bounds x="225" y="115" width="100" height="80" />
        <bpmndi:BPMNLabel labelStyle="sid-592ddc98-48fc-42b3-b7f9-1df8b6d368c5">
          <omgdc:Bounds x="241.44285583496094" y="147" width="67.11428833007812" height="12" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="sid-3B0273A0-FE3B-4525-9E1F-FBAE2F53C2E7_gui" bpmnElement="sid-3B0273A0-FE3B-4525-9E1F-FBAE2F53C2E7">
        <omgdc:Bounds x="390" y="140" width="30" height="30" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="collapsedProcess_2_gui" bpmnElement="collapsedProcess_2" isExpanded="false">
        <omgdc:Bounds x="465" y="115" width="100" height="80" />
        <bpmndi:BPMNLabel labelStyle="sid-592ddc98-48fc-42b3-b7f9-1df8b6d368c5">
          <omgdc:Bounds x="481.4778537750244" y="141" width="67.11429214477539" height="24" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="sid-17C71FEB-D00D-46D0-ACBE-BB424A3EE5A5_gui" bpmnElement="sid-17C71FEB-D00D-46D0-ACBE-BB424A3EE5A5">
        <omgdc:Bounds x="610" y="141" width="28" height="28" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="sid-472B540C-A0CD-46F4-9640-DF692EC1BFFC_gui" bpmnElement="sid-472B540C-A0CD-46F4-9640-DF692EC1BFFC">
        <omgdi:waypoint x="420" y="155" />
        <omgdi:waypoint x="465" y="155" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="sid-910420B0-D11B-4F9D-B285-703D8AC0BA90_gui" bpmnElement="sid-910420B0-D11B-4F9D-B285-703D8AC0BA90">
        <omgdi:waypoint x="565" y="155" />
        <omgdi:waypoint x="610" y="155" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="expandedProcess_gui" bpmnElement="expandedProcess" isExpanded="true">
        <omgdc:Bounds x="370" y="79" width="288" height="151" />
        <bpmndi:BPMNLabel labelStyle="sid-592ddc98-48fc-42b3-b7f9-1df8b6d368c5">
          <omgdc:Bounds x="378" y="89" width="65.57142639160156" height="12" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="sid-EE9F103D-15EA-4FBB-A4DB-8B94E5F04390_gui" bpmnElement="sid-EE9F103D-15EA-4FBB-A4DB-8B94E5F04390">
        <omgdc:Bounds x="703" y="141" width="28" height="28" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="sid-EB275CF2-5EF1-44FA-B41B-71EB37CC2657_gui" bpmnElement="sid-EB275CF2-5EF1-44FA-B41B-71EB37CC2657">
        <omgdi:waypoint x="180" y="155" />
        <omgdi:waypoint x="225" y="155" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="sid-FB543319-8DFB-4445-AAA3-720137FB230B_gui" bpmnElement="sid-FB543319-8DFB-4445-AAA3-720137FB230B">
        <omgdi:waypoint x="325" y="154.89539748953976" />
        <omgdi:waypoint x="370" y="154.80125523012552" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="sid-B99D259B-1BD5-45FF-BD57-FB99C360BAC0_gui" bpmnElement="sid-B99D259B-1BD5-45FF-BD57-FB99C360BAC0">
        <omgdi:waypoint x="658" y="154.85467980295567" />
        <omgdi:waypoint x="703" y="154.9655172413793" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
    <bpmndi:BPMNLabelStyle id="sid-592ddc98-48fc-42b3-b7f9-1df8b6d368c5">
      <omgdc:Font name="Arial" size="12" isBold="false" isItalic="false" isUnderline="false" isStrikeThrough="false" />
    </bpmndi:BPMNLabelStyle>
  </bpmndi:BPMNDiagram>
  <bpmndi:BPMNDiagram id="sid-0bbc44a9-8a6a-44a1-8b61-0cf870c26fe4">
    <bpmndi:BPMNPlane id="sid-275fa3fd-9114-4005-b305-71f6c1411c24" bpmnElement="collapsedProcess_2">
      <bpmndi:BPMNShape id="sid-C67DBACD-2E96-4A69-97F0-9B04CCB255EC_gui" bpmnElement="sid-C67DBACD-2E96-4A69-97F0-9B04CCB255EC">
        <omgdc:Bounds x="230" y="130" width="30" height="30" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="sid-3459D5A6-4E18-4133-8362-0418AC9CE830_gui" bpmnElement="sid-3459D5A6-4E18-4133-8362-0418AC9CE830">
        <omgdc:Bounds x="305" y="105" width="100" height="80" />
        <bpmndi:BPMNLabel labelStyle="sid-efc2a4e3-a5c6-411d-80d4-64f3a53bc4a4">
          <omgdc:Bounds x="321.44285583496094" y="131" width="67.11428833007812" height="24" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="sid-987C40F8-82D3-4637-ABCE-A85A5E2AB8A9_gui" bpmnElement="sid-987C40F8-82D3-4637-ABCE-A85A5E2AB8A9">
        <omgdc:Bounds x="450" y="131" width="28" height="28" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="sid-A7460113-CB75-491D-817B-5E1A8C606B8C_gui" bpmnElement="sid-A7460113-CB75-491D-817B-5E1A8C606B8C">
        <omgdi:waypoint x="260" y="145" />
        <omgdi:waypoint x="305" y="145" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="sid-01982395-64E8-43EF-A6D3-CDD276C312AA_gui" bpmnElement="sid-01982395-64E8-43EF-A6D3-CDD276C312AA">
        <omgdi:waypoint x="405" y="145" />
        <omgdi:waypoint x="450" y="145" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
    <bpmndi:BPMNLabelStyle id="sid-efc2a4e3-a5c6-411d-80d4-64f3a53bc4a4">
      <omgdc:Font name="Arial" size="12" isBold="false" isItalic="false" isUnderline="false" isStrikeThrough="false" />
    </bpmndi:BPMNLabelStyle>
  </bpmndi:BPMNDiagram>
  <bpmndi:BPMNDiagram id="sid-19b0e874-234e-4bee-b83c-068fe088c591">
    <bpmndi:BPMNPlane id="sid-89d69f37-848f-4da3-bb9a-df3a9889286d" bpmnElement="sid-D0CDA908-DDCE-4E82-88D0-F1A919B8AE8B">
      <bpmndi:BPMNShape id="sid-A13CFBB9-5471-4439-96FA-B65862CA7B21_gui" bpmnElement="sid-A13CFBB9-5471-4439-96FA-B65862CA7B21">
        <omgdc:Bounds x="190" y="170" width="30" height="30" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="sid-ECEB5194-0BF8-4913-A76F-963DC1FD1D7F_gui" bpmnElement="sid-ECEB5194-0BF8-4913-A76F-963DC1FD1D7F" isExpanded="false">
        <omgdc:Bounds x="265" y="145" width="100" height="80" />
        <bpmndi:BPMNLabel labelStyle="sid-3bb65e49-bd30-45eb-a52f-e94a5e93edbc">
          <omgdc:Bounds x="281.09214210510254" y="177" width="67.88571548461914" height="12" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="sid-5DCDF44C-56B4-47A2-9085-00004E76F3A8_gui" bpmnElement="sid-5DCDF44C-56B4-47A2-9085-00004E76F3A8" isExpanded="false">
        <omgdc:Bounds x="410" y="145" width="100" height="80" />
        <bpmndi:BPMNLabel labelStyle="sid-3bb65e49-bd30-45eb-a52f-e94a5e93edbc">
          <omgdc:Bounds x="424.5492877960205" y="165" width="70.9714241027832" height="36" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="sid-345BB5A6-CE3B-4711-972A-81E47BA4B667_gui" bpmnElement="sid-345BB5A6-CE3B-4711-972A-81E47BA4B667">
        <omgdc:Bounds x="555" y="171" width="28" height="28" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="sid-E71F5783-AFE7-44ED-8A9C-378C95087448_gui" bpmnElement="sid-E71F5783-AFE7-44ED-8A9C-378C95087448">
        <omgdi:waypoint x="220" y="185" />
        <omgdi:waypoint x="265" y="185" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="sid-6B9741CD-D94B-41C7-A2EA-63A4C9445E16_gui" bpmnElement="sid-6B9741CD-D94B-41C7-A2EA-63A4C9445E16">
        <omgdi:waypoint x="365" y="185" />
        <omgdi:waypoint x="410" y="185" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="sid-1A9DABC6-6079-4BF2-9D49-C4DC9569C519_gui" bpmnElement="sid-1A9DABC6-6079-4BF2-9D49-C4DC9569C519">
        <omgdi:waypoint x="510" y="185" />
        <omgdi:waypoint x="555" y="185" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
    <bpmndi:BPMNLabelStyle id="sid-3bb65e49-bd30-45eb-a52f-e94a5e93edbc">
      <omgdc:Font name="Arial" size="12" isBold="false" isItalic="false" isUnderline="false" isStrikeThrough="false" />
    </bpmndi:BPMNLabelStyle>
  </bpmndi:BPMNDiagram>
  <bpmndi:BPMNDiagram id="sid-5e1db01c-46b0-40b0-bb83-67add2799cae">
    <bpmndi:BPMNPlane id="sid-ecd0155e-80cf-40cd-85a9-edf72b8d2a6c" bpmnElement="sid-ECEB5194-0BF8-4913-A76F-963DC1FD1D7F">
      <bpmndi:BPMNShape id="sid-F2CCFED7-AD11-4A21-80EE-71D9C96549C8_gui" bpmnElement="sid-F2CCFED7-AD11-4A21-80EE-71D9C96549C8">
        <omgdc:Bounds x="310" y="160" width="30" height="30" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="sid-29B8F97B-1A0D-4280-A62D-5093316C484B_gui" bpmnElement="sid-29B8F97B-1A0D-4280-A62D-5093316C484B">
        <omgdc:Bounds x="385" y="135" width="100" height="80" />
        <bpmndi:BPMNLabel labelStyle="sid-2e7107aa-4946-4b44-a3c0-a137c1775d39">
          <omgdc:Bounds x="401.05714416503906" y="167" width="67.88571166992188" height="12" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="sid-F5AE4FCD-976F-4426-B1FF-7FCAA4CE2393_gui" bpmnElement="sid-F5AE4FCD-976F-4426-B1FF-7FCAA4CE2393">
        <omgdc:Bounds x="530" y="161" width="28" height="28" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="sid-3BB6D6CA-BF45-4D15-A1AB-64686C41DB32_gui" bpmnElement="sid-3BB6D6CA-BF45-4D15-A1AB-64686C41DB32">
        <omgdi:waypoint x="340" y="175" />
        <omgdi:waypoint x="385" y="175" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="sid-4E25B80E-EF68-4EE5-BB08-C1F54F1A7C39_gui" bpmnElement="sid-4E25B80E-EF68-4EE5-BB08-C1F54F1A7C39">
        <omgdi:waypoint x="485" y="175" />
        <omgdi:waypoint x="530" y="175" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
    <bpmndi:BPMNLabelStyle id="sid-2e7107aa-4946-4b44-a3c0-a137c1775d39">
      <omgdc:Font name="Arial" size="12" isBold="false" isItalic="false" isUnderline="false" isStrikeThrough="false" />
    </bpmndi:BPMNLabelStyle>
  </bpmndi:BPMNDiagram>
  <bpmndi:BPMNDiagram id="sid-63fc7b22-cc85-458f-aaab-e165a0e36240">
    <bpmndi:BPMNPlane id="sid-3f3c0ecd-73e0-4a0a-b05c-0b6bd60eeeb1" bpmnElement="sid-5DCDF44C-56B4-47A2-9085-00004E76F3A8">
      <bpmndi:BPMNShape id="sid-2098A7EE-D7D8-405E-AF61-95BA48E891B6_gui" bpmnElement="sid-2098A7EE-D7D8-405E-AF61-95BA48E891B6">
        <omgdc:Bounds x="240" y="250" width="30" height="30" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="sid-E21C867A-7A56-46DD-9A1E-94C02FDB18FB_gui" bpmnElement="sid-E21C867A-7A56-46DD-9A1E-94C02FDB18FB">
        <omgdc:Bounds x="315" y="225" width="100" height="80" />
        <bpmndi:BPMNLabel labelStyle="sid-d93ac8fb-7a66-4ace-93a6-71582a8ab1a1">
          <omgdc:Bounds x="329.51428604125977" y="245" width="70.97142791748047" height="36" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="sid-DAFD7764-8FA5-417B-BB33-55E483687A7D_gui" bpmnElement="sid-DAFD7764-8FA5-417B-BB33-55E483687A7D">
        <omgdc:Bounds x="460" y="251" width="28" height="28" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="sid-E5404926-738D-4447-87FE-FC6DD1E8BEFC_gui" bpmnElement="sid-E5404926-738D-4447-87FE-FC6DD1E8BEFC">
        <omgdi:waypoint x="270" y="265" />
        <omgdi:waypoint x="315" y="265" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="sid-FED62A8F-6C3A-4BB2-8DE9-18FB0B35B50E_gui" bpmnElement="sid-FED62A8F-6C3A-4BB2-8DE9-18FB0B35B50E">
        <omgdi:waypoint x="415" y="265" />
        <omgdi:waypoint x="460" y="265" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
    <bpmndi:BPMNLabelStyle id="sid-d93ac8fb-7a66-4ace-93a6-71582a8ab1a1">
      <omgdc:Font name="Arial" size="12" isBold="false" isItalic="false" isUnderline="false" isStrikeThrough="false" />
    </bpmndi:BPMNLabelStyle>
  </bpmndi:BPMNDiagram>
</definitions>
`