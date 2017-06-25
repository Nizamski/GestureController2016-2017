package org.elsys.rxtx;
import java.awt.AWTException;
import java.awt.Robot;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import javax.swing.JFrame;
import javax.swing.JSlider;
import com.fazecast.jSerialComm.*;

public class Main {

	public static void main(String[] args) {		

		SerialPort[] ports = SerialPort.getCommPorts();
		System.out.println("Select a port:");
		int i = 1;
		for(SerialPort port : ports)
			System.out.println(i++ +  ": " + port.getSystemPortName());
		Scanner s = new Scanner(System.in);
		int chosenPort = s.nextInt();

		SerialPort serialPort = ports[chosenPort - 1];
		if(serialPort.openPort())
			System.out.println("Port opened successfully.");
		else {
			System.out.println("Unable to open the port.");
			return;
		}
		
		serialPort.setComPortTimeouts(SerialPort.TIMEOUT_SCANNER, 0, 0);
		int xCoord = 0;
	    	int yCoord = 0;
		
		Scanner data = new Scanner(serialPort.getInputStream());
		
		while(data.hasNextLine()){
			
			String output = data.nextLine();
			System.out.println(output);
			
			try {
				xCoord = Integer.parseInt(output.split("\\|")[0]);
				yCoord = Integer.parseInt(output.split("\\|")[1]);
			    // Move the cursor
			    Robot robot = new Robot();
			    robot.mouseMove(xCoord, yCoord);
			} catch (AWTException e) {
			}
		}
		System.out.println("Done.");
		
	}

}
